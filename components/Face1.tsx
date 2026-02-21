"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { DownloadModal } from "./DownloadModal";

export function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      img: "/assets/metasP.png",
      alt: "Metas personalizadas",
      title: "Metas que viram conquistas",
      desc: "Crie metas personalizadas (viagem, quitar dívidas, guardar dinheiro) ou use modelos prontos. O app trabalha por você.",
    },
    {
      img: "/assets/graficos.png",
      alt: "Gráficos inteligentes",
      title: "Seus gastos, do seu jeito",
      desc: "Gráficos claros, categorias automáticas e alertas inteligentes para entender hábitos e tomar decisões conscientes.",
    },
    {
      img: "/assets/historyscreen.png",
      alt: "Controle total",
      title: "Tudo no seu controle",
      desc: "Acompanhe saldo, transações detalhadas e tenha clareza total do seu dinheiro na palma da mão.",
    },
  ];

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index] as HTMLElement;
      card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <section id="#about" className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-[#0f0e17] via-[#1a093d] to-[#2c0b5e] text-white" >
      <div className="relative z-10 flex items-center py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-20 xl:gap-24">
            {/* Lado esquerdo - Texto */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-3xl">
            <h2 className="text-4xl md:text-4xl font-extrabold mb-1 leading-tight">
                  Seu Dinheiro,</h2>
             <p className="text-[#F0BA2B] text-5xl md:text-7xl font-extrabold mb-8">Sua Liberdade</p>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-200 max-w-xl">
                FinWise reúne ferramentas inteligentes para você organizar, planejar e crescer seu dinheiro de forma simples, segura e sem complicações.
              </p>

              <div className="flex justify-center">
                <DownloadModal>
                  <button className="mt-6 rounded-full bg-[#F0BA2B] px-10 py-4 text-lg font-bold text-black shadow-xl hover:bg-yellow-400 hover:cursor-pointer hover:scale-105 transition-all">
                    Baixar Agora
                  </button>
                </DownloadModal>
              </div>
            </div>

            {/* Lado direito - Carrossel */}
            <div className="relative w-full lg:w-1/2 max-w-xl lg:max-w-2xl">
              {/* Padding lateral extra apenas em desktop para as setas */}
              <div className="relative px-12 sm:px-16 lg:px-20 xl:px-24">
                <div className="relative overflow-hidden rounded-2xl">
                
                  <div
                    ref={carouselRef}
                    className="
                      flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth gap-0
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                    "
                  >
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="shrink-0 w-full snap-center bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-2xl shadow-2xl"
                      >
                        <Image
                          src={card.img}
                          alt={card.alt}
                          width={500}
                          height={700}
                          className="mx-auto mb-6 rounded-xl shadow-xl animate-float-sutil will-change-transform object-contain"
                        />
                        <h3 className="text-2xl font-bold mb-4 text-center">{card.title}</h3>
                        <p className="text-gray-200 leading-relaxed text-center">{card.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Setas - posicionamento corrigido e seguro */}
                  <button
                    onClick={goToPrev}
                    className="
                      absolute top-1/2 -translate-y-1/2 
                      left-0 sm:left-1 lg:-left-12.5l:left-[-70px]
                      bg-black/50 hover:bg-black/70 text-white p-4 rounded-full 
                      transition-all hover:scale-110 focus:outline-none z-30
                    "
                    aria-label="Anterior"
                  >
                    ←
                  </button>
                  <button
                    onClick={goToNext}
                    className="
                      absolute top-1/2 -translate-y-1/2 
                      right-0 sm:right-1 lg:-right-12.5l:right-[-70px]
                      bg-black/50 hover:bg-black/70 text-white p-4 rounded-full 
                      transition-all hover:scale-110 focus:outline-none z-30
                    "
                    aria-label="Próximo"
                  >
                    →
                  </button>

                  {/* Dots indicadores */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          scrollToCard(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentIndex === index ? "bg-[#F0BA2B] scale-150 shadow-md" : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay sutil no bottom */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-40 md:h-64 
          bg-linear-to-t from-[#000B31]/40 via-[#001E82]/15 to-transparent 
          pointer-events-none z-0
        "
      />
    </section>
  );
}