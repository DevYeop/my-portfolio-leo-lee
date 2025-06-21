import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-korean">
              안녕하세요,<br />
              <span className="text-blue-300">개발자</span> 이상엽입니다
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed font-korean">
              7년간의 교육 경험과 다양한 프로젝트를 통해 성장한 풀스택 개발자입니다.
              현재 B2B 플랫폼 개발을 이끌고 있으며, 기술 교육과 멘토링에도 열정을 가지고 있습니다.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">7+</div>
                <div className="text-sm text-blue-100 font-korean">년 교육 경험</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">10+</div>
                <div className="text-sm text-blue-100 font-korean">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">500+</div>
                <div className="text-sm text-blue-100 font-korean">교육생 배출</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-blue-custom hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 font-korean"
              >
                연락하기
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#projects")}
                className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-navy px-8 py-3 rounded-lg font-medium transition-all duration-200 font-korean"
              >
                프로젝트 보기
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-blue-900/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
