'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

type SimpleDownloadModalProps = {
  children: React.ReactNode
  apkPath?: string
}

export function DownloadModal({
  children,
  apkPath = '/downloads/finwise.rar',  
}: SimpleDownloadModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return children

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = apkPath
    link.download = 'Finwise.rar'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsOpen(false)
  }

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setIsOpen(false)
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          >
            <div
              className={`
                w-full max-w-md bg-linear-to-b from-[#000B31] via-[#001E82] to-[#0027AD]
                rounded-t-3xl md:rounded-2xl shadow-2xl overflow-hidden
                transform transition-all duration-300 ease-out
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full md:translate-y-0 opacity-0'}
                md:max-h-[90vh] overflow-y-auto
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle drag mobile */}
              <div className="md:hidden flex justify-center pt-3 pb-1">
                <div className="w-12 h-1.5 bg-[#F0BA2B]/40 rounded-full" />
              </div>

              <div className="p-6 space-y-6 text-white">
                <h2 className="text-2xl font-bold text-center text-[#F0BA2B]">
                  Baixar o Finwise?
                </h2>

                <p className="text-center text-gray-200">
                  Ao clicar em "Baixar agora", o APK será baixado em uma pasta compactada no seu dispositivo Android.
                </p>

                <ul className="text-sm text-gray-300 list-disc pl-5 space-y-2">
                  <li>Extraia a pasta baixada, abra o arquivo dentro dela</li>
                  <li>Permita instalação de fontes desconhecidas (se pedir)</li>
                  <li>Instale e organize suas finanças!</li>
                </ul>

                <p className="text-xs italic text-center text-gray-400">
                  Arquivo seguro, direto do site oficial.
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleDownload}
                    className="bg-[#F0BA2B] hover:bg-yellow-400 text-black py-4 rounded-xl font-semibold text-lg transition shadow-md hover:cursor-pointer hover:scale-105" 
                  >
                    Baixar agora
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="border border-[#F0BA2B]/50 hover:bg-[#F0BA2B]/10 text-white py-4 rounded-xl font-medium transition hover:cursor-pointer hover:scale-105"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}