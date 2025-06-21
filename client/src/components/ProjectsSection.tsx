import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "(주)더조은홈 - B2B 물류 플랫폼",
    period: "진행 예정",
    description: "화주사와 3PL 업체 간의 협업과 데이터를 통합적으로 관리할 수 있는 B2B 플랫폼을 기획하고 개발합니다. 물류 업계의 디지털 트랜스포메이션을 이끌어갈 혁신적인 솔루션입니다.",
    role: "CTO, 전체 시스템 아키텍처 설계 및 개발 팀 리딩",
    tags: ["B2B 플랫폼", "물류 관리", "데이터 통합", "시스템 설계"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=400",
    featured: true,
  },
  {
    title: "프리랜서 개발",
    period: "2023.01 - 2024.05",
    projects: [
      {
        name: "음식 주문 챗봇 개발",
        description: "네이버 및 카카오톡 기반 음식 주문 챗봇 프로토타입 개발. 의도 분류, 개체명 인식, 룰 기반 답변 검색 챗봇 엔진 구현.",
      },
      {
        name: "AI 데이터 시각화",
        description: "AI 모델 생성 데이터를 다양한 차트로 시각화하고, 미래 예측치를 시간선 기반 애니메이션으로 표현.",
      },
      {
        name: "AI 및 웹서비스 교안 작성",
        description: "AI 모델 학습 및 생성, 웹서비스 연계, 배포까지의 과정 교안 작성. 실습 중심의 개발 및 배포 단계별 가이드 제공.",
      },
    ],
    tags: ["챗봇", "AI", "데이터 시각화", "교육"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
  {
    title: "기업 프로젝트",
    period: "2019.10 - 2022.12",
    projects: [
      {
        name: "(주)김리도 - CEO",
        description: "글로벌 화물 및 용역 중계 플랫폼 서비스 개발",
        period: "2021.07 - 2022.12",
      },
      {
        name: "(주)지바이크",
        description: "공유 퀵보드 서비스 개발",
        period: "2020.08 - 2020.10",
      },
      {
        name: "(주)비마시스",
        description: "현대 스마트 모빌리티 서비스 개발",
        period: "2019.10 - 2020.06",
      },
    ],
    tags: ["플랫폼 개발", "모빌리티", "창업"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-korean">프로젝트</h2>
          <p className="text-xl text-slate-custom max-w-3xl mx-auto font-korean">
            다양한 분야에서 진행한 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="project-card overflow-hidden shadow-lg lg:col-span-2">
              <img
                src={projects[0].image}
                alt="Modern tech office collaboration"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-navy font-korean">{projects[0].title}</h3>
                  <Badge className="bg-blue-100 text-blue-800">
                    {projects[0].period}
                  </Badge>
                </div>
                <p className="text-slate-custom mb-6 text-lg font-korean">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-navy/10 text-navy font-korean">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-slate-custom font-korean">
                  <strong>역할:</strong> {projects[0].role}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="project-card overflow-hidden shadow-lg h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-navy font-korean">{project.title}</h3>
                      <span className="text-sm text-slate-custom">{project.period}</span>
                    </div>
                    
                    <div className="space-y-4">
                      {project.projects?.map((subProject, subIndex) => (
                        <div key={subIndex}>
                          <h4 className="font-semibold text-navy mb-2 font-korean">
                            {subProject.name}
                            {subProject.period && (
                              <span className="text-xs text-slate-custom ml-2">
                                ({subProject.period})
                              </span>
                            )}
                          </h4>
                          <p className="text-slate-custom text-sm mb-2 font-korean">
                            {subProject.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className={`text-xs font-korean ${
                            project.title.includes('프리랜서') 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
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
