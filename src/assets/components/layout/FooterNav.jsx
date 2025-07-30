import { useState } from 'react'

function FooterNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all') // Estado que mostra todos os projeto antes mesmo de clicarmos em uma tag específica

  // Estrutura com objetos que salva informações dos projetos
  const projectsData = [
    { 
      id: 1, 
      title: "RISKSHOT", 
      description: "Uma agência fotográfica que captura a adrenalina juntamente com o cliente", 
      image: "/images/ecommerce-react.jpg",
      tags: ["html", "css", "javascript", "scss"],
      technologies: ["HTML", "CSS3", "JavaScript", "SCSS"],
      className: "project-react project-javascript",
      githubUrl: "https://github.com/usuario/ecommerce-react"
    },
    { 
      id: 2, 
      title: "Dashboard Vue", 
      description: "Painel administrativo com gráficos interativos e controle de usuários.", 
      image: "/images/dashboard-vue.jpg",
      tags: ["vue", "javascript"],
      technologies: ["Vue.js", "JavaScript", "Chart.js", "SCSS"],
      className: "project-vue project-javascript",
      githubUrl: "https://github.com/usuario/ecommerce-react"
    },
    { 
      id: 3, 
      title: "Landing Page React", 
      description: "Site institucional responsivo com animações suaves e design moderno.", 
      image: "/images/landing-react.jpg",
      tags: ["react"],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      className: "project-react",
      githubUrl: "https://github.com/usuario/ecommerce-react"
    },
    { 
      id: 4, 
      title: "App Vue", 
      description: "Aplicativo web para gestão de tarefas com interface intuitiva.", 
      image: "/images/app-vue.jpg",
      tags: ["vue"],
      technologies: ["Vue.js", "Vuex", "CSS3"],
      className: "project-vue",
      githubUrl: "https://github.com/usuario/ecommerce-react"
    },
    { 
      id: 5, 
      title: "Jogo JavaScript", 
      description: "Game interativo desenvolvido em vanilla JavaScript com canvas.", 
      image: "/images/game-js.jpg",
      tags: ["javascript"],
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
      className: "project-javascript",
      githubUrl: "https://github.com/usuario/ecommerce-react"
    }
  ]

  // Função de arrays para salvar os estados das opções do menu
  const menuItems = [
    { name: 'SOBRE', id: 'sobre' },
    { name: 'PROJETOS', id: 'projetos' },
    { name: 'CURRÍCULO', id: 'curriculo' },
    { name: 'CONTATO', id: 'contato' },
  ]

  // Função que filtra os projetos
  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return projectsData // Retorna todos os projetos
    }
    else {
      return projectsData.filter(project => project.tags.includes(activeFilter)) // Filtra por tag
    }
  }

  const handleFilterClick = (tag) => { setActiveFilter(tag) }

  const handleMenuClick = (e, itemId) => {
    e.preventDefault()
    setActiveModal(itemId)
    setIsMenuOpen(false)
  }

  const closeModal = () => { setActiveModal(null) }

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
            
            {/* FILTROS POR TAG - COM SCROLL HORIZONTAL */}
            <div className="flex gap-2 mb-4 overflow-x-auto custom-scrollbar pb-2">
              <div className="flex gap-2 min-w-max">
                <button 
                  onClick={() => handleFilterClick('all')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'all' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  TODOS
                </button>

                <button 
                  onClick={() => handleFilterClick('react')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'react' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  HTML
                </button>

                <button 
                  onClick={() => handleFilterClick('react')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'react' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  REACT
                </button>

                <button 
                  onClick={() => handleFilterClick('react')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'react' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  REACT
                </button>

                <button 
                  onClick={() => handleFilterClick('vue')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'vue' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  VUE
                </button>

                <button 
                  onClick={() => handleFilterClick('javascript')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'javascript' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  JAVASCRIPT
                </button>

                {/* Você pode adicionar mais filtros aqui */}
                <button 
                  onClick={() => handleFilterClick('css')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'css' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  CSS
                </button>

                <button 
                  onClick={() => handleFilterClick('nodejs')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'nodejs' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  NODE.JS
                </button>
                
                <button 
                  onClick={() => handleFilterClick('typescript')}
                  className={`cursor-pointer px-3 py-1 text-xs rounded transition-colors whitespace-nowrap ${
                    activeFilter === 'typescript' 
                      ? 'bg-white/30 text-white' 
                      : 'bg-black/20 text-(--text-color) hover:bg-black/30'
                  }`}
                >
                  TYPESCRIPT
                </button>
              </div>
            </div>

            {/* LISTA DE PROJETOS COM NOVO TEMPLATE */}
            <div class="space-y-4 max-h-80 overflow-y-auto custom-scrollbar pr-2">
              {getFilteredProjects().map(project => (
                <div 
                  key={project.id} 
                  class={`project-card bg-black/20 border border-gray-600/30 rounded-lg overflow-hidden hover:bg-black/30 transition-all duration-300 ${project.class}`}
                >
                  {/* IMAGEM DO PROJETO COM LINK PARA REPOSITÓRIO */}
                  <div class="relative h-32 bg-gray-800/50 overflow-hidden group">
                    {project.githubUrl ? (
                      // Link para o repositório GitHub
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="block w-full h-full relative"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        {/* Overlay que aparece no hover */}
                        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span class="text-white text-xs font-bold bg-black/70 px-3 py-1 rounded">
                            💻 VER CÓDIGO
                          </span>
                        </div>
                        {/* Fallback para quando não há imagem */}
                        <div class="absolute inset-0 bg-gray-700/50 hidden items-center justify-center">
                          <span class="text-(--text-color) text-xs">Sem imagem</span>
                        </div>
                      </a>
                    ) : (
                      // Caso não tenha repositório, só mostra a imagem
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          class="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div class="absolute inset-0 bg-gray-700/50 hidden items-center justify-center">
                          <span class="text-(--text-color) text-xs">Sem imagem</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* CONTEÚDO DO PROJETO */}
                  <div class="p-4">
                    {/* TÍTULO */}
                    <h3 class="text-white text-sm font-bold mb-2 font-(family-name:--main-font)">
                      {project.title}
                    </h3>

                    {/* DESCRIÇÃO */}
                    <p class="text-(--text-color) text-xs leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* LINGUAGENS/TECNOLOGIAS */}
                    <div class="space-y-2 mb-3">
                      <span class="text-(--text-color) text-xs font-medium block">
                        Tecnologias:
                      </span>
                      <div class="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            class="px-2 py-1 bg-white/10 rounded text-xs text-(--text-color) border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* BOTÃO DO REPOSITÓRIO */}
                    {project.githubUrl && (
                      <div class="pt-2 border-t border-gray-600/30">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gray-600/30 hover:bg-gray-600/50 border border-gray-500/30 rounded text-xs text-(--text-color) transition-colors duration-200"
                        >
                          <span>💻</span>
                          <span>VER NO GITHUB</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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