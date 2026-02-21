'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { DownloadModal } from './DownloadModal'
import { ModalTerms } from './ModalTerms'

interface HeaderProps {
  onNavClick?: (section: string) => void
}

export function Header({ onNavClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Função reutilizável de scroll (você já tem no utils.ts, mas pra garantir)
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isMobileMenuOpen 
          ? 'bg-linear-to-r from-[#000B31] to-[#001E82] shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'  
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 hover:cursor-pointer hover:scale-105" onClick={() => {
                scrollTo('#hero')
              }}>
            <Image src="/assets/logo.png" alt="FinWise" width={40} height={40} className="rounded-full" />
            <div className="flex flex-col leading-none">
              <span className="text-[#F0BA2B] text-sm font-bold">FIN</span>
              <span className="text-[#F0BA2B] text-sm font-bold">WISE</span>
            </div>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-white font-semibold">
            <button
              onClick={() => {
                scrollTo('#about')
              }}
              className="hover:text-[#F0BA2B] transition-colors text-md hover:scale-105 bg-transparent border-none cursor-pointer"
            >
              O Finwise
            </button>
            <button
              onClick={() => {
                scrollTo('#suport')
              }}
              className="hover:text-[#F0BA2B] transition-colors text-md hover:scale-105 bg-transparent border-none cursor-pointer"
            >
              Suporte
            </button>
            <ModalTerms>
              <button 
                className="hover:text-[#F0BA2B] transition-colors text-md hover:scale-105 bg-transparent border-none cursor-pointer"
              >
                Políticas e termos
              </button>
            </ModalTerms>
          </nav>

          {/* Botão Acessar + Hamburger */}
          <div className="flex items-center gap-4">
            <DownloadModal>
              <button className="rounded-full bg-[#F0BA2B] px-5 py-2.5 text-base font-bold text-black hover:bg-yellow-400 transition md:px-8 md:py-3 md:text-md hover:cursor-pointer hover:scale-105 shadow-md">
                Acessar
              </button>
            </DownloadModal>

            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#F0BA2B]/20">
            <nav className="flex flex-col space-y-4 text-white font-medium text-center">
              <button
                onClick={() => {
                  scrollTo('#about')
                  setIsMobileMenuOpen(false)
                }}
                className="hover:text-[#F0BA2B] transition py-2 bg-transparent border-none cursor-pointer"
              >
                O Finwise
              </button>
              <button
                onClick={() => {
                  scrollTo('#suport')
                  setIsMobileMenuOpen(false)
                }}
                className="hover:text-[#F0BA2B] transition py-2 bg-transparent border-none cursor-pointer"
              >
                Suporte
              </button>
              <ModalTerms>
                <button 
                  className="hover:text-[#F0BA2B] transition py-2 bg-transparent border-none cursor-pointer w-full text-center"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  Políticas e termos
                </button>
              </ModalTerms>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}