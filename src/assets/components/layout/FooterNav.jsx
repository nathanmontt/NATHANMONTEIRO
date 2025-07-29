import { useState } from 'react'

function FooterNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)

  const menuItems = [
    { name: 'SOBRE', id: 'sobre' },
    { name: 'PROJETOS', id: 'projetos' },
    { name: 'CURRÍCULO', id: 'curriculo' },
    { name: 'CONTATO', id: 'contato' },
  ]

  const handleMenuClick = (e, itemId) => {
    e.preventDefault()
    setActiveModal(itemId)
    setIsMenuOpen(false)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const renderModalContent = () => {
    switch(activeModal) {
      case 'sobre':
        return (
          <div className='container-about'>
            <h2 class="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">SOBRE MIM</h2>
            <p class="text-(--text-color) leading-relaxed mb-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, commodi? texto 1
            </p>
            <p class="text-(--text-color) leading-relaxed text-sm">
              Lorem ipsum dolor sit amet. texto 2
            </p>
          </div>
        )

      case 'projetos':
        return (
          <div className="container-projects">
            <h2 class="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">PROJETOS</h2>
            <p class="text-(--text-color) leading-relaxed text-sm">
              Lorem ipsum dolor sit amet. texto 1
            </p>
          </div>
        )

      case 'contato':
        return (
          <div class="text-left">
            <h2 class="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">CONTATO</h2>
            <div class="space-y-2 text-(--text-color) text-sm">
              <p>📧 nathan@exemplo.com</p>
              <p>📱 (11) 99999-9999</p>
              <p>💼 LinkedIn: /in/nathanmonteiro</p>
              <p>🐙 GitHub: /nathanmonteiro</p>
            </div>
          </div>
        )

      case 'curriculo':
        return (
          <div class="text-left">
            <h2 class="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">CURRÍCULO</h2>
            <p class="text-(--text-color) leading-relaxed mb-4 text-sm">
              Baixe meu currículo atualizado ou visualize online.
            </p>
            <div class="flex gap-3">
              <button class="px-4 py-2 bg-black/30 rounded hover:bg-black/40 transition-colors text-(--text-color) text-sm">
                Download PDF
              </button>
            </div>
          </div>
        )
        
      default:
        return null
    }
  }

  return (
    <>
      <nav class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">

        {/* Botão de menu e transições */}
        <div class="hidden md:flex items-center gap-4 px-6 py-3 rounded-lg backdrop-blur-lg bg-black/40 border border-gray-700/50 shadow-xl">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => handleMenuClick(e, item.id)}
              class="text-(--text-color) text-xs font-(family-name:--main-font) hover:font-bold transition-all duration-200 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Botão de menu responsivo (aparecimento do menu quando clicado) */}
        <div class="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            class="pr-6 pl-6 pt-2 pb-2 rounded-lg backdrop-blur-lg bg-black/40 border border-gray-700/50 text-(--text-color) font-(family-name:--main-font) text-xs transition-all duration-500 hover:bg-black/60 cursor-pointer"
          >
            MENU
          </button>

          <div
            class={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-200 ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div class="flex flex-col gap-2 p-4 rounded-lg backdrop-blur-lg bg-black/40 border border-gray-700/50 shadow-xl min-w-28">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => handleMenuClick(e, item.id)}
                  class="text-(--text-color) text-xs font-(family-name:--main-font) hover:text-white duration-200 text-center py-2 px-3 rounded hover:font-bold transition-all  cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {isMenuOpen && (
            <div
              class="fixed inset-0 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </nav>

      {activeModal && (
        <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            class="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <div class="relative max-w-md w-full p-6 rounded-lg backdrop-blur-lg bg-black/50 border border-gray-600/50 shadow-2xl">
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              class="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded bg-black/40 hover:bg-black/60 transition-colors text-(--text-color) text-sm cursor-pointer"
            >
              x
            </button>

            {/* Conteúdo específico da modal */}
            {renderModalContent()}
          </div>
        </div>
      )}
    </>
  )
}

export default FooterNav