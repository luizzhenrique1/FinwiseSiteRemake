"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Suport() {
  return (
    <section id='#suport' className="relative w-full bg-linear-to-b from-[#000B31] via-[#001E82] to-[#0027AD] text-white py-12 md:py-12 lg:py-14">
      {/* Overlay bottom mínimo */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-20 md:h-32 
          bg-linear-to-trom-[#000B31]/40 via-[#001E82]/15 to-transparent 
          pointer-events-none z-0
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Título menor */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Estamos aqui pra te ouvir e ajudar!
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Problema, dúvida ou sugestão? Fale com a gente!
          </p>
        </div>

        {/* Grid com gaps mínimos */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Lado esquerdo */}
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-center">
                <Mail className="w-8 h-8 mx-auto mb-2 text-[#F0BA2B]" />
                <h3 className="text-lg font-bold mb-1">E-mail</h3>
                <a href="mailto:finwise02@gmail.com" className="text-gray-200 hover:text-[#F0BA2B] transition text-sm">
                  finwise02@gmail.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all text-center">
                <Phone className="w-8 h-8 mx-auto mb-2 text-[#F0BA2B]" />
                <h3 className="text-lg font-bold mb-1">Telefone</h3>
                <p className="text-gray-200 text-sm">(11) 91234-8965</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#F0BA2B]" />
                <h3 className="text-lg font-bold">Endereço</h3>
              </div>
              <p className="text-gray-200 text-sm mb-3">
                R. Cristóbal Cláudio Elio, 88 – Parque Cecap, Guarulhos – SP, 07190-065
              </p>

              <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.058!2d-46.533!3d-23.458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce64a123456789%3A0xabcdef1234567890!2sR.+Crist%C3%B3bal+Cl%C3%A1udio+Elio%2C+88+-+Parque+Cecap%2C+Guarulhos+-+SP%2C+07190-065%2C+Brasil!5e0!3m2!1spt-BR!2sbr!4v1739876543210!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização FinWise - Parque Cecap, Guarulhos"
                ></iframe>
                </div>
            </div>
          </div>

          {/* Lado direito - Formulário ainda menor */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center text-[#F0BA2B]">
              Fale com a gente!
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F0BA2B] transition text-sm"
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F0BA2B] transition text-sm"
                required
              />
              <textarea
                rows={4}
                placeholder="Sua mensagem..."
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F0BA2B] transition text-sm resize-none"
                required
              />
              <button
                type="submit"
                className="
                  w-full rounded-full bg-[#F0BA2B] px-8 py-4 text-base font-bold text-black 
                  shadow-xl hover:bg-yellow-400 hover:scale-105 transition-all duration-300 
                  flex items-center justify-center gap-2
                "
              >
                Enviar
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}