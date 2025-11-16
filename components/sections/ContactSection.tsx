"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    celular: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagemWhatsApp = `
    *SOLICITAÇÃO DE ORÇAMENTO - NEW LINE*

    *Nome:* ${formData.nome}
    *E-mail:* ${formData.email}
    ${
      formData.telefone ? `*Telefone:* ${formData.telefone}\n` : ""
    }*Celular:* ${formData.celular}
    *Assunto:* ${formData.assunto}

    *Mensagem:*
    ${formData.mensagem}
    `.trim();

    const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);

    const numeroWhatsApp = "5541988657834";

    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`,
      "_blank"
    );

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      celular: "",
      assunto: "",
      mensagem: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B4423' fill-opacity='1' font-family='Arial, sans-serif' font-size='14' font-weight='bold'%3E%3Ctext x='10' y='20'%3EN%3C/text%3E%3Ctext x='50' y='20'%3EL%3C/text%3E%3Ctext x='10' y='60'%3EL%3C/text%3E%3Ctext x='50' y='60'%3EN%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gradient mb-4">SOLICITE UM ORÇAMENTO</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e clique em ENVIAR. Logo entraremos em
            contato!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      Telefones
                    </h3>
                    <a
                      href="https://wa.me/5541984982581?text=Olá,%20vi%20seu%20contato%20e%20gostaria%20de%20saber%20mais!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-[var(--brown)] transition-colors"
                    >
                      (41) 98498-2581 (WhatsApp)
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      E-mail
                    </h3>
                    <a
                      href="mailto:contato@newlinepersianas.com.br"
                      className="text-gray-600 hover:text-[var(--brown)] transition-colors"
                    >
                      contato@newlinepersianas.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brown)] to-[var(--caramel)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      Endereço
                    </h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=R.+Estrada+da+Ribeira,+2612,+Maracanã,+Colombo-PR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[var(--brown)] transition-colors"
                    >
                      R. Estrada da Ribeira, 2612
                      <br />
                      Maracanã, Colombo-PR
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="telefone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Telefone
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(41) 3621-7074"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="celular"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Celular *
                      </label>
                      <Input
                        id="celular"
                        name="celular"
                        type="tel"
                        required
                        value={formData.celular}
                        onChange={handleChange}
                        placeholder="(41) 98498-2581"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Assunto *
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Qual o assunto?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Mensagem e/ou observações"
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-brown text-white text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    ENVIAR MENSAGEM
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
