import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Code, Database, Brain, GraduationCap, Award } from "lucide-react";

const skillCategories = [
  {
    title: "백엔드 개발",
    icon: Server,
    color: "blue",
    skills: ["Python", "Java", "Node.js", "PHP", "Apache", "Nginx"],
  },
  {
    title: "프론트엔드",
    icon: Code,
    color: "green",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "TypeScript"],
  },
  {
    title: "데이터베이스",
    icon: Database,
    color: "purple",
    skills: ["MySQL", "MariaDB", "SQLite", "PostgreSQL", "Redis", "Elasticsearch"],
  },
  {
    title: "AI & 데이터 분석",
    icon: Brain,
    color: "orange",
    skills: ["TensorFlow", "PyTorch", "Pandas", "KoNLPy", "OpenCV", "Kibana"],
  },
];

const education = [
  {
    title: "컴퓨터공학사",
    subtitle: "학점은행제",
    date: "취득",
    description: "",
    icon: GraduationCap,
  },
  {
    title: "팀노바 수료인증",
    subtitle: "개발 교육과정",
    date: "수료",
    description: "https://teamnova.co.kr/team2.php",
    icon: Award,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-korean">기술 스택</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-korean">
            다양한 기술을 활용하여 혁신적인 솔루션을 개발합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-muted/50 text-center h-full border-border">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    category.color === 'blue' ? 'bg-blue-100' :
                    category.color === 'green' ? 'bg-green-100' :
                    category.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                  }`}>
                    <category.icon className={`text-2xl ${
                      category.color === 'blue' ? 'text-blue-600' :
                      category.color === 'green' ? 'text-green-600' :
                      category.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4 font-korean">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="block bg-background px-3 py-2 rounded-lg text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-400/20 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 font-korean">추가 기술 경험</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 font-korean">모바일 & AR</h4>
              <div className="space-y-2">
                {["Android", "ARCore", "Google API"].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="block bg-amber-100/20 dark:bg-amber-900/20 text-foreground px-3 py-2 rounded-lg text-sm border border-amber-400/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 font-korean">프로토콜 & 통신</h4>
              <div className="space-y-2">
                {["TCP/IP", "HTTP/HTTPS", "WebRTC", "MPEG-DASH"].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="block bg-amber-100/20 dark:bg-amber-900/20 text-foreground px-3 py-2 rounded-lg text-sm border border-amber-400/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-4 font-korean">크롤링 & 자동화</h4>
              <div className="space-y-2">
                {["Selenium", "BeautifulSoup", "Webdriver", "데이터 크롤링"].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="block bg-amber-100/20 dark:bg-amber-900/20 text-foreground px-3 py-2 rounded-lg text-sm border border-amber-400/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl p-8 border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8 font-korean">교육 & 자격증</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      index === 0 ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      <item.icon className={`${
                        index === 0 ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-korean">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-korean">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm font-korean">
                    {item.date} {item.description && `${item.description}`}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
