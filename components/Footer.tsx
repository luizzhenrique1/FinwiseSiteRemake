// components/Footer.tsx
"use client";

import { Instagram, Facebook, Twitter, Download, ShieldCheck, FileText, QrCode, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModalTerms } from "./ModalTerms";

export function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#00124F] to-[#000B31] text-gray-300 overflow-hidden">
      {/* Overlay sutil para textura */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
        {/* Top - 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Coluna 1 - FinWise */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-linear-to-br rounded-xl flex items-center justify-center shadow-lg">
                <Image
                  src="/assets/logo.png"
                  alt="FinWise Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white">FinWise</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Organize. Planeje. Conquiste.
            </p>
            <p className="text-sm text-gray-400">
              Gestão financeira inteligente, simples e segura.
            </p>
          </div>

          {/* Coluna 2 - Suporte */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#F0BA2B]" />
              Suporte
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
            <button
              onClick={() => {
                document.getElementById('#suport')?.scrollIntoView({ behavior: 'smooth' })
              }} className="hover:text-[#F0BA2B] transition-colors flex items-center gap-2 hover:cursor-pointer hover:scale-105 ">
                  <FileText className="w-5 h-5" /> Suporte
            </button>
              </li>
              <li>
              <ModalTerms>
                <button  className="hover:text-[#F0BA2B] transition-colors flex items-center gap-2 hover:cursor-pointer hover:scale-105">
                  <ShieldCheck className="w-5 h-5" /> Política de Privacidade
                </button>
              </ModalTerms>
              </li>
              <li>
                <ModalTerms>
                <button  className="hover:text-[#F0BA2B] transition-colors flex items-center gap-2 hover:cursor-pointer hover:scale-105">
                  <ShieldCheck className="w-5 h-5" /> Política de Privacidade
                </button>
              </ModalTerms>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Baixe o App */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Download className="w-6 h-6 text-[#F0BA2B]" />
              Baixe o App
            </h4>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* QR Code */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                <Image
                  src="/assets/qrcode.jpeg" 
                  alt="QR Code para download FinWise"
                  width={140}
                  height={140}
                  className="rounded-lg"
                />
              </div>

              {/* Badges */}
              <div className="space-y-4">
                <Link href="https://play.google.com/store/apps/details?id=seu.app.id" target="_blank">
                  <Image
                    src="/assets/playstore.png" // badge oficial ou sua versão
                    alt="Baixar no Google Play"
                    width={180}
                    height={54}
                    className="hover:opacity-90 transition-opacity"
                  />
                </Link>
                <Link href="https://apps.apple.com/app/seu-app-id" target="_blank">
                  <Image
                    src="/assets/apple.png"
                    alt="Baixar na App Store"
                    width={180}
                    height={54}
                    className="hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Texto central + redes */}
        <div className="text-center border-t border-white/10 pt-12 pb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#F0BA2B] mb-4">
            Baixe e transforme sua vida financeira!
          </h3>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Organize. Planeje. Conquiste.
          </p>

          {/* Redes sociais com ícones lucide */}
          <div className="flex justify-center gap-8 mb-8">
            <Link href="https://instagram.com/finwise" target="_blank" className="hover:text-[#F0BA2B] hover:scale-125 transition-all duration-300">
              <Instagram size={32} strokeWidth={1.5} />
            </Link>
            <Link href="https://facebook.com/finwise" target="_blank" className="hover:text-[#F0BA2B] hover:scale-125 transition-all duration-300">
              <Facebook size={32} strokeWidth={1.5} />
            </Link>
            <Link href="https://x.com/finwise" target="_blank" className="hover:text-[#F0BA2B] hover:scale-125 transition-all duration-300">
              <Twitter size={32} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Créditos TCC - mais conciso e emocional */}
        <div className="text-center text-sm text-gray-500 border-t border-white/10 pt-8">
          <p className="font-medium">
            Este projeto é um Trabalho de Conclusão de Curso (TCC), desenvolvido por alunos da ETEC de Guarulhos, com muito empenho, dedicação e carinho.
          </p>
          <p className="mt-4">
            Nosso objetivo é entregar uma ferramenta que realmente ajude no controle financeiro de forma simples, intuitiva e eficiente. Seu apoio, colaboração e uso fazem toda a diferença para nós!
          </p>
          <p className="mt-6 text-gray-400">
            Agradecemos por estar aqui, por acreditar no nosso projeto e por fazer parte dessa jornada.
          </p>
        </div>
      </div>
    </footer>
  );
}