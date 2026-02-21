import Image from "next/image";

export function About() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#000B31] via-[#001E82] to-[#0027AD] text-white py-10 md:py-12 lg:py-14">
      {/* Overlay bottom mínimo */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-20 md:h-32 
          bg-linear-to-t from-[#000B31]/40 via-[#001E82]/15 to-transparent 
          pointer-events-none z-0
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Título ainda menor */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Nossa História
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            De um TCC na ETEC de Guarulhos nasceu o FinWise: simples e para quem quer mais do próprio dinheiro.
          </p>
        </div>

        {/* Blocos lado a lado – gaps mínimos */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Bloco 1 */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-xl animate-float-sutil">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#F0BA2B]">
                O que nos motivou
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                Começou como TCC na ETEC de Guarulhos. Seis alunos se uniram para resolver a dificuldade de controlar finanças por falta de ferramentas simples.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl animate-float-sutil">
              <Image
                src="/assets/about1.png"
                alt="Alunos trabalhando no FinWise"
                width={450}
                height={250}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">
                  União e dedicação.
                </p>
              </div>
            </div>
          </div>

          {/* Bloco 2 */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-xl shadow-xl animate-float-sutil">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#F0BA2B]">
                Nossa jornada
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-200">
                Meses de desafios e aprendizado em equipe. Hoje FinWise é mais que um TCC: uma ferramenta coletiva para ajudar pessoas a conquistarem mais.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl animate-float-sutil">
              <Image
                src="/assets/about2.png"
                alt="Crescimento financeiro"
                width={450}
                height={250}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">
                  Do desafio ao impacto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chamada final – mínima */}
        <div className="text-center mt-10">
          <p className="text-lg md:text-xl font-bold text-[#F0BA2B] mb-2">
            Bem-vindo ao FinWise
          </p>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Simples, acessível e transformadora para quem quer mais do próprio dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
}