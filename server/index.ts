import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Check for required environment variables at startup
function validateEnvironment() {
  if (process.env.NODE_ENV === "production" && !process.env.SESSION_SECRET) {
    log("ERROR: SESSION_SECRET environment variable is required in production", "startup");
    process.exit(1);
  }
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

async function startServer() {
  try {
    // Validate environment variables
    validateEnvironment();
    
    log("Starting server initialization...", "startup");
    
    const server = await registerRoutes(app);

    // Improved error handling middleware - log but don't throw
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      log(`Error: ${status} - ${message}`, "error");
      
      // Log the full error in development
      if (process.env.NODE_ENV === "development") {
        console.error("Full error details:", err);
      }

      res.status(status).json({ message });
      // Don't throw the error to prevent crashes
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      log("Setting up Vite development server...", "startup");
      await setupVite(app, server);
    } else {
      log("Setting up static file serving for production...", "startup");
      serveStatic(app);
    }

    // ALWAYS serve the app on port 5000
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = 5000;
    
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`Server successfully started on port ${port}`, "startup");
      log(`Environment: ${process.env.NODE_ENV || "development"}`, "startup");
    });

    // Handle server errors
    server.on('error', (error: any) => {
      if (error.code === 'EADDRINUSE') {
        log(`Port ${port} is already in use`, "error");
      } else {
        log(`Server error: ${error.message}`, "error");
      }
      process.exit(1);
    });

  } catch (error: any) {
    log(`Failed to start server: ${error.message}`, "error");
    console.error("Server startup error:", error);
    process.exit(1);
  }
}

// Handle uncaught exceptions and unhandled rejections
process.on('uncaughtException', (error) => {
  log(`Uncaught Exception: ${error.message}`, "error");
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  log(`Unhandled Rejection at Promise: ${reason}`, "error");
  console.error("Unhandled Rejection at:", promise, 'reason:', reason);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  log('SIGTERM received, shutting down gracefully', "shutdown");
  process.exit(0);
});

process.on('SIGINT', () => {
  log('SIGINT received, shutting down gracefully', "shutdown");
  process.exit(0);
});

// Start the server
startServer();
