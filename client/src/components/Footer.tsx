export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border text-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 10.83 7 10s.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 10.83 14 10s.67-1.5 1.5-1.5zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-amber-400">Leo.Lee</div>
              <div className="text-sm text-muted-foreground font-korean">이상엽</div>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 font-korean">
            용감한 사자처럼 도전하며 혁신적인 솔루션을 만들어갑니다
          </p>
          <div className="border-t border-border pt-6">
            <p className="text-center text-muted-foreground font-korean">
              © 2025 Leo.Lee (이상엽). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
