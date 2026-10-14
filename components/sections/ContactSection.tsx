"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LABEL =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-gray-600";
const FIELD =
  "h-12 rounded-xl border-black/10 bg-[#fff] px-4 text-base text-gray-800 placeholder:text-gray-400 focus-visible:ring-[var(--caramel)] focus-visible:ring-offset-0";

const contacts = [
  {
    icon: BsWhatsapp,
    label: "WhatsApp",
    value: "(41) 98498-2581",
    href: "https://wa.me/5541984982581?text=Olá,%20vi%20seu%20contato%20e%20gostaria%20de%20saber%20mais!",
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@newlinepersianas.com.br",
    href: "mailto:contato@newlinepersianas.com.br",
    external: false,
  },
];

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

    const numeroWhatsApp = "5541984982581";

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

  // Bloco único no padrão do site: painel escuro com a foto do hero e os
  // contatos à esquerda, formulário claro à direita, borda clara arredondada.
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 overflow-hidden rounded-[32px] border-[6px] border-[#faf8f6] bg-[#faf8f6] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.4)] lg:grid-cols-[0.85fr_1.4fr]"
        >
          {/* Painel escuro */}
          <div className="relative overflow-hidden rounded-[26px] bg-[#17120f] p-8 text-white md:p-10 lg:p-12">
            <Image
              src="/images/persianas-bg.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#17120f]/60 via-[#17120f]/80 to-[#17120f]" />

            <div className="relative flex h-full flex-col">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--caramel)]">
                Fale com a gente
              </p>
              <h2 className="mb-5 font-display font-extrabold uppercase leading-tight text-white">
                Solicite um orçamento
              </h2>
              <p className="text-lg leading-relaxed text-white/70">
                Preencha o formulário e clique em enviar: a mensagem segue
                direto para o nosso WhatsApp e logo entraremos em contato!
              </p>

              <div className="mt-10 space-y-6 lg:mt-auto lg:pt-12">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      {...(contact.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4"
                    >
                      <Icon className="h-6 w-6 flex-shrink-0 text-[var(--caramel)]" />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                          {contact.label}
                        </span>
                        <span className="block break-all text-white transition-colors group-hover:text-[var(--caramel)]">
                          {contact.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6 md:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="nome" className={LABEL}>
                  Nome completo *
                </label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className={FIELD}
                />
              </div>
              <div>
                <label htmlFor="email" className={LABEL}>
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
                  className={FIELD}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="telefone" className={LABEL}>
                  Telefone
                </label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 0000-0000"
                  className={FIELD}
                />
              </div>
              <div>
                <label htmlFor="celular" className={LABEL}>
                  Celular *
                </label>
                <Input
                  id="celular"
                  name="celular"
                  type="tel"
                  required
                  value={formData.celular}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className={FIELD}
                />
              </div>
            </div>

            <div>
              <label htmlFor="assunto" className={LABEL}>
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
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="mensagem" className={LABEL}>
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
                className={`${FIELD} h-auto py-3`}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="group h-14 w-full rounded-full gradient-brown text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.01]"
            >
              <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              ENVIAR MENSAGEM
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
