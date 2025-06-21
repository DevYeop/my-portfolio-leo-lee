import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { User, Phone, Mail, MapPin, Download } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const sendMessageMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "메시지 전송 완료",
        description: "메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "전송 실패",
        description: "메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "입력 오류",
        description: "모든 필드를 입력해주세요.",
        variant: "destructive",
      });
      return;
    }
    sendMessageMutation.mutate(formData);
  };

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
      content: "이상엽 (1989. 07. 15)",
    },
    {
      icon: Phone,
      title: "연락처",
      content: "010-8567-9245",
    },
    {
      icon: Mail,
      title: "이메일",
      content: "lee.sangyeop0715@gmail.com",
    },
    {
      icon: MapPin,
      title: "거주지",
      content: "경기도 수원시 장안구 연무동",
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <info.icon className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold font-korean">{info.title}</h3>
                    <p className="text-blue-100 font-korean">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-custom hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full md:w-auto font-korean"
              >
                <Download className="mr-2 h-4 w-4" />
                이력서 다운로드
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-white font-korean">메시지 보내기</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium mb-2 text-white font-korean">
                      이름
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium mb-2 text-white font-korean">
                      이메일
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium mb-2 text-white font-korean">
                      메시지
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="메시지를 입력하세요"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={sendMessageMutation.isPending}
                    className="w-full bg-blue-custom hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 font-korean"
                  >
                    {sendMessageMutation.isPending ? "전송 중..." : "메시지 보내기"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
