import Image from "next/image";

export function Finish() {
  return (
    <section className="relative py-24 bg-[#00124F] text-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
          {/* Lado esquerdo - Texto + detalhes */}
          <div className="text-center lg:text-left max-w-xl relative">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              Seu Dinheiro, <span className="text-[#F0BA2B]">Sua Liberdade</span>.
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              Chega de se perder nas contas! Com FinWise, controle fácil, rápido e sem complicações. 
              Planeje, acompanhe e conquiste mais do seu dinheiro todo dia.
            </p>
            <button className="rounded-full bg-[#F0BA2B] px-12 py-6 text-xl font-bold text-black shadow-2xl hover:scale-105 transition-all hover:cursor-pointer">
              Baixe Agora e Conquiste
            </button>

            {/* Detalhes ao redor do texto (SVGs inline de circles + ícones flutuantes) */}
          </div>

          {/* Lado direito - Imagem (maior, com detalhes ao redor) */}
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <Image
              src="/assets/face1.png"
              alt="Liberdade financeira com FinWise"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl animate-float-sutil will-change-transform"
            />

            {/* Detalhes ao redor da imagem (SVGs inline de waves pequenas + ícones) */}
            <svg className="absolute -bottom-12 -left-8 w-32 h-16 text-[#0027AD]/30" viewBox="0 0 200 100">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                d="M0,50 Q50,0 100,50 Q150,100 200,50"
                className="animate-[wave_3s_infinite_ease-in-out]"
              />
            </svg>
            <span className="absolute top-0 right-4 text-6xl opacity-70 animate-float-medio">🚀</span>
            <svg className="absolute bottom-8 -right-10 w-20 h-20 text-[#F0BA2B]/10" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="currentColor" className="animate-pulse-slow" />
            </svg>
          </div>
        </div>
      </div>


    </section>
  );
}