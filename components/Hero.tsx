'use client';

import { Header } from "@/components/header"; 
import { DownloadModal } from "@/components/DownloadModal";
import Image from "next/image";

export function Hero() {
  return (
    <section id="#hero" className="relative min-h-dvh w-full overflow-hidden">
  {/* Header: limitada e centraliz
  ada */}
  <Header onNavClick={function (section: string): void {
        throw new Error("Function not implemented.");
      } } />  {/* assume que Header já tem mx-auto max-w-7xl */}

  {/* Conteúdo do Hero: mais largo */}
    <div id='#hero' className="relative z-10 flex h-full items-center pt-28 sm:pt-32 md:pt-36 lg:pt-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">   {/* mais pt em mobile/small */}
    {/* Container interno que limita um pouco, mas menos que a header, pra deixar mais largo que a header*/}
    <div className="w-full max-w-screen-2xl mx-auto">  {/* ← aqui: mais largo que 7xl (1280px) */}
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-24">   {/* gap maior em lg+, ta dando erro q so o kct em iphone se e samsumg s8*/}
        
        {/* Texto - lado esquerdo, pessoalmente eu achei beeeem mais bonito assim */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-3xl mt-4 lg:mt-0 ">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-3xl xl:text-5xl">
            Bem-vindo ao
          </h1>
          <h1 className="-mt-2 text-5xl font-extrabold leading-tight bg-linear-to-r from-[#F0BA2B] via-[#FDE68A] (gold claro) to-[#FFFFFF] bg-size-[200%_200%] bg-clip-text text-transparent  animate-gradient-text md:text-6xl lg:text-7xl xl:text-8xl">
            Finwise
          </h1>

          {/* Descrição maior, tava muito pequena em telas com resolução maior que hd */}
          <p className="mt-6 text-lg leading-relaxed text-gray-200 md:text-xl lg:text-lg xl:text-xl max-w-xl">
            Uma plataforma de gestão financeira pessoal inteligente e segura, feita para ajudar você a organizar receitas, despesas e metas em um só lugar. Simples de usar, ela oferece controle claro do seu dinheiro com foco em praticidade e privacidade, auxiliando em decisões financeiras mais conscientes no dia a dia.
          </p>

         <div className="flex justify-center">
        <DownloadModal>
          <button className="mt-6 rounded-full bg-[#F0BA2B] px-10 py-4 text-lg font-bold text-black shadow-xl hover:bg-yellow-400 hover:cursor-pointer hover:scale-105 transition-all">
            Acesse Agora
          </button>
        </DownloadModal>
      </div>
        </div>

        {/* Imagem com efeito flutuando */}
       <div className="relative flex justify-center lg:justify-end order-last lg:order-0">   {/* imagem embaixo no mobile e do lado no pc*/}
          <div className="animate-float">  {/* ← classe de animação */}
            <Image
              src="/assets/hero.png"
                alt="Ilustração Finwise - Gestão financeira"
                width={420}           // aumentei um pouco que o normal da outra tela, que eu lembre
                height={680}
                className="h-auto max-h-[75vh] w-auto object-contain animate-float-sutil will-change-transform drop-shadow-2xl"
                priority
                />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Gradiente de fade na parte inferior para suavizar a transição para a próxima seção */}  
  <div 
  className="
    absolute bottom-0 left-0 right-0 h-40 md:h-64 
    bg-linear-to-t 
    from-[#000B31]/40           // azul escuro com 40% opacidade no bottom
    via-[#001E82]/15 
    to-transparent
    pointer-events-none z-0
    hover:scale-105 transition-all duration-300
    hover:shadow-yellow-500/50 
  " 
/>
  {/* Gradiente de fundo */}
  <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#000B31] via-[#001E82] to-[#0027AD]" />
</section>
  );
}