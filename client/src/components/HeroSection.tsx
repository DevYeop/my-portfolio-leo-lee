import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Database, Zap } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Professional Header with Leo Logo */}
            <div className="flex items-center mb-6">
              <div className="relative">
                {/* Leo Lion Logo */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S7 10.83 7 10s.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 10.83 14 10s.67-1.5 1.5-1.5zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
                  </svg>
                </div>
                {/* Tech Circuit Pattern */}
                <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-amber-400 rounded-full bg-navy"></div>
              </div>
              <div className="ml-4">
                <div className="text-sm text-blue-200 font-korean">Leo.Lee</div>
                <div className="text-lg text-amber-400 font-bold">Developer</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-korean">
              안녕하세요,<br />
              <span className="text-amber-300">풀스택 개발자</span> 이상엽입니다
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed font-korean">
              용감한 사자처럼 새로운 기술에 도전하며 성장하는 개발자입니다.
              끊임없는 학습과 혁신으로 최고의 솔루션을 만들어갑니다.
            </p>

            {/* Professional Tech Stack Preview */}
            <div className="bg-gradient-to-r from-black/20 to-amber-900/20 backdrop-blur-sm rounded-lg p-4 mb-6 border border-amber-400/20">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <Code className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs text-blue-200 font-korean">Frontend</div>
                </div>
                <div className="text-center">
                  <Database className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs text-blue-200 font-korean">Backend</div>
                </div>
                <div className="text-center">
                  <Cpu className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs text-blue-200 font-korean">AI/ML</div>
                </div>
                <div className="text-center">
                  <Zap className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs text-blue-200 font-korean">DevOps</div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-200 font-korean">나이:</span>
                  <span className="text-white ml-2 font-korean">만 35세 (1989.07.15)</span>
                </div>
                <div>
                  <span className="text-blue-200 font-korean">희망연봉:</span>
                  <span className="text-amber-300 ml-2 font-korean font-bold">3,600만원</span>
                </div>
              </div>
            </div>

            {/* Key Stats with Professional Design */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-black/20 rounded-lg p-4 border border-amber-400/20">
                <div className="text-2xl font-bold text-amber-300">4+</div>
                <div className="text-sm text-blue-100 font-korean">년 교육 경험</div>
              </div>
              <div className="text-center bg-black/20 rounded-lg p-4 border border-amber-400/20">
                <div className="text-2xl font-bold text-amber-300">15+</div>
                <div className="text-sm text-blue-100 font-korean">개발 프로젝트</div>
              </div>
              <div className="text-center bg-black/20 rounded-lg p-4 border border-amber-400/20">
                <div className="text-2xl font-bold text-amber-300">다양한</div>
                <div className="text-sm text-blue-100 font-korean">기술 경험</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 font-korean shadow-lg"
              >
                연락하기
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#projects")}
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-navy px-8 py-3 rounded-lg font-medium transition-all duration-200 font-korean"
              >
                프로젝트 보기
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Professional Leo Design */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-8 shadow-2xl">
              {/* Circuit Board Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M20 0v40M0 20h40" stroke="#f59e0b" strokeWidth="0.5" fill="none" />
                      <circle cx="20" cy="20" r="2" fill="#f59e0b" opacity="0.6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>
              
              {/* Large Leo Lion Silhouette */}
              <div className="relative z-10 flex items-center justify-center h-80">
                <div className="relative">
                  {/* Main Lion Head */}
                  <div className="w-48 h-48 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-amber-400/30">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 text-amber-400" fill="currentColor">
                      {/* Lion mane */}
                      <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.3" />
                      <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.5" />
                      {/* Lion face */}
                      <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.8" />
                      {/* Eyes */}
                      <circle cx="42" cy="45" r="2" fill="#1f2937" />
                      <circle cx="58" cy="45" r="2" fill="#1f2937" />
                      {/* Nose */}
                      <path d="M50 50 L47 55 L53 55 Z" fill="#1f2937" />
                      {/* Mouth */}
                      <path d="M45 60 Q50 65 55 60" stroke="#1f2937" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                  
                  {/* Tech Elements */}
                  <div className="absolute -top-4 -left-4 text-amber-400">
                    <Code className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-4 -right-4 text-amber-400">
                    <Database className="w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 text-amber-400">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-amber-400">
                    <Zap className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              {/* Leo.Lee Brand */}
              <div className="absolute top-6 right-6 text-right">
                <div className="text-2xl font-bold text-amber-400">Leo.Lee</div>
                <div className="text-sm text-gray-400">Full Stack Developer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
