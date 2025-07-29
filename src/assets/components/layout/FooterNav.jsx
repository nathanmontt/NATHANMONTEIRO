import { useState } from 'react'

function FooterNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)

  const menuItems = [
    { name: 'SOBRE', id: 'sobre' },
    { name: 'PROJETOS', id: 'projetos' },
    { name: 'CONTATO', id: 'contato' },
    { name: 'CURRÍCULO', id: 'curriculo' }
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
          <div className="text-center">
            <h2 className="text-3xl font-(family-name:--secondary-font) mb-6 text-white">SOBRE MIM</h2>
            <p className="text-(--text-color) leading-relaxed mb-4">
              Desenvolvedor Frontend apaixonado por criar experiências digitais únicas e funcionais.
            </p>
            <p className="text-(--text-color) leading-relaxed">
              Especializado em React, JavaScript e tecnologias modernas de desenvolvimento web.
            </p>
          </div>
        )
      case 'projetos':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-(family-name:--secondary-font) mb-6 text-white">PROJETOS</h2>
            <p className="text-(--text-color) leading-relaxed">
              Aqui você encontrará uma seleção dos meus trabalhos mais recentes e relevantes.
            </p>
          </div>
        )
      case 'contato':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-(family-name:--secondary-font) mb-6 text-white">CONTATO</h2>
            <div className="space-y-3 text-(--text-color)">
              <p>📧 nathan@exemplo.com</p>
              <p>📱 (11) 99999-9999</p>
              <p>💼 LinkedIn: /in/nathanmonteiro</p>
              <p>🐙 GitHub: /nathanmonteiro</p>
            </div>
          </div>
        )
      case 'curriculo':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-(family-name:--secondary-font) mb-6 text-white">CURRÍCULO</h2>
            <p className="text-(--text-color) leading-relaxed mb-6">
              Baixe meu currículo atualizado ou visualize online.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-(--text-color)">
                Download PDF
              </button>
              <button className="px-6 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-(--text-color)">
                Visualizar Online
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
      {/* Bottom Menu */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-opacity duration-300 hover:opacity-90">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={(e) => handleMenuClick(e, item.id)}
              className="text-(--text-color) text-sm font-(family-name:--main-font) tracking-wider hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-(--text-color) font-(family-name:--main-font) text-sm tracking-wider transition-all duration-300 hover:bg-white/15"
          >
            MENU
          </button>

          {/* Expanded Menu Items */}
          <div
            className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <div className="flex flex-col gap-3 p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg min-w-32">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => handleMenuClick(e, item.id)}
                  className="text-(--text-color) text-sm font-(family-name:--main-font) tracking-wider hover:text-white transition-colors duration-300 cursor-pointer text-center py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Backdrop for closing menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </nav>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Modal Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative max-w-lg w-full mx-4 p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl transition-all duration-300 transform">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-(--text-color) text-xl"
            >
              ×
            </button>

            {/* Modal Content */}
            {renderModalContent()}
          </div>
        </div>
      )}
    </>
  )
}

export default FooterNav