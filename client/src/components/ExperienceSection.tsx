import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Shield } from "lucide-react";

const experiences = [
  {
    title: "(주)더조은홈 - CTO",
    period: "2025.06 ~ (예정)",
    description: "화주사와 3PL 업체 간의 협업과 데이터를 통합적으로 관리할 수 있는 B2B 플랫폼 기획 및 개발",
    tags: ["B2B 플랫폼", "CTO", "시스템 설계"],
    icon: Briefcase,
    color: "blue",
  },
  {
    title: "교육 경력",
    period: "2021.07 ~ 현재",
    description: "다양한 교육기관에서 개발자 양성 과정 강의 및 멘토링",
    subExperiences: [
      {
        title: "(주)스타트업코드 - 카카오 테크 부트캠프 보조강사",
        period: "2024.10 - 2025.05",
        description: "클라우드 네이티브 제주 2기 담당",
      },
      {
        title: "경희대학교 - 캠퍼스타운사업단 Master 멘토",
        period: "2024.11 - 2025.12",
        description: "전문기술분야 멘토단(개발부문)",
      },
      {
        title: "(주)캠퍼스세븐 - K-digit 주강사",
        period: "2024.05 - 2024.10",
        description: "KB IT's Your Life 5기 8회차 (비전공 C반 담당)",
      },
      {
        title: "(주)캠퍼스세븐 - K-digit 보조강사",
        period: "2022.10 - 2024.03",
        description: "웹 서비스 백엔드 개발자 과정 담당",
      },
    ],
    tags: ["교육", "멘토링", "강의"],
    icon: GraduationCap,
    color: "green",
  },
  {
    title: "제13공수여단 - 특수전 정보작전 부사관",
    period: "2009.08 - 2016.11",
    description: "7년차 중사 전역, 특수전 정보작전 전문",
    tags: ["리더십", "책임감", "전문성"],
    icon: Shield,
    color: "gray",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-korean">경험</h2>
          <p className="text-xl text-slate-custom max-w-3xl mx-auto font-korean">
            교육부터 개발까지, 다양한 분야에서의 전문성을 쌓아왔습니다.
          </p>
        </motion.div>

        <div className="relative">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="timeline-item relative pl-12"
              >
                <div className={`absolute left-0 top-0 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                  experience.color === 'blue' ? 'bg-blue-custom' :
                  experience.color === 'green' ? 'bg-green-500' : 'bg-gray-600'
                }`}>
                  <experience.icon className="h-4 w-4 text-white" />
                </div>
                
                <Card className="shadow-lg border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-navy font-korean">{experience.title}</h3>
                      <Badge variant="secondary" className={`text-sm font-medium ${
                        experience.color === 'blue' ? 'bg-blue-50 text-blue-custom' :
                        experience.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                        {experience.period}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-custom mb-4 font-korean">{experience.description}</p>
                    
                    {experience.subExperiences && (
                      <div className="space-y-3 mb-4">
                        {experience.subExperiences.map((subExp, subIndex) => (
                          <div key={subIndex} className="border-l-4 border-blue-custom pl-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <h4 className="font-semibold text-navy font-korean">{subExp.title}</h4>
                              <span className="text-sm text-slate-custom">{subExp.period}</span>
                            </div>
                            <p className="text-slate-custom text-sm font-korean">{subExp.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-navy/10 text-navy font-korean">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
