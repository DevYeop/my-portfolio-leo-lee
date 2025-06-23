import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Mail, MapPin, Download, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    toast({
      title: "이력서 다운로드",
      description: "이력서 다운로드 기능을 준비 중입니다.",
    });
  };

  const contactInfo = [
    {
      icon: User,
      title: "이름",
      content: "이상엽 (만 35세, 1989.07.15)",
      link: null,
    },
    {
      icon: Phone,
      title: "연락처",
      content: "010-8567-9245",
      link: "tel:010-8567-9245",
    },
    {
      icon: Mail,
      title: "이메일",
      content: "lee_sangyeop0715@naver.com",
      link: "mailto:lee_sangyeop0715@naver.com",
    },
    {
      icon: MessageCircle,
      title: "카카오톡",
      content: "오픈 채팅방",
      link: "https://open.kakao.com/me/sangyeop",
    },
    {
      icon: MapPin,
      title: "거주지",
      content: "경기도 수원시 장안구 연무동",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-korean">연락처</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-korean">
            새로운 기회와 협업에 대해 언제든 연락주세요.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <h3 className="font-bold text-white mb-2 font-korean">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-blue-200 hover:text-white transition-colors duration-200 font-korean"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-blue-100 font-korean">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-custom hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 font-korean"
              >
                <Download className="mr-2 h-4 w-4" />
                이력서 다운로드
              </Button>
            </div>

            <div className="text-center mt-8">
              <p className="text-blue-100 font-korean">
                위의 연락처를 통해 언제든지 연락해주세요!<br />
                빠른 연락을 원하시면 카카오톡 오픈채팅을 이용해주세요.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}