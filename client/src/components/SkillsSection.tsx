import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Code, Database, Brain, GraduationCap, Award } from "lucide-react";

const skillCategories = [
  {
    title: "백엔드",
    icon: Server,
    color: "blue",
    skills: ["Python", "Java", "Node.js", "Django", "Spring Boot"],
  },
  {
    title: "프론트엔드",
    icon: Code,
    color: "green",
    skills: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "데이터베이스 & 클라우드",
    icon: Database,
    color: "purple",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker"],
  },
  {
    title: "AI & 데이터",
    icon: Brain,
    color: "orange",
    skills: ["Machine Learning", "TensorFlow", "Pandas", "Data Visualization", "ChatBot"],
  },
];

const education = [
  {
    title: "컴퓨터공학사",
    subtitle: "학점은행제 및 독학사 병행",
    date: "2017.02.22",
    description: "군 복무 중 취득",
    icon: GraduationCap,
  },
  {
    title: "정보처리기사",
    subtitle: "국가 기술 자격증",
    date: "2017.05.26",
    description: "",
    icon: Award,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-korean">기술 스택</h2>
          <p className="text-xl text-slate-custom max-w-3xl mx-auto font-korean">
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
              <Card className="bg-gray-50 text-center h-full">
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
                  <h3 className="text-lg font-bold text-navy mb-4 font-korean">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="block bg-white px-3 py-2 rounded-lg text-sm">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-navy text-center mb-8 font-korean">교육 & 자격증</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <Card key={index} className="bg-white">
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
                      <h4 className="font-bold text-navy font-korean">{item.title}</h4>
                      <p className="text-slate-custom text-sm font-korean">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-custom text-sm font-korean">
                    {item.date} 취득 {item.description && `(${item.description})`}
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
