function ProjectCard({ project }) {
  return (
    <div class="project-card bg-black/20 border border-gray-600/30 rounded-lg overflow-hidden hover:bg-black/30 transition-all duration-300">
      {/* IMAGEM DO PROJETO */}
      <div class="relative h-32 bg-gray-800/50 overflow-hidden group">
        {project.githubUrl ? (
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
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white text-xs font-bold bg-black/70 px-3 py-1 rounded">
                💻 VER CÓDIGO
              </span>
            </div>
            <div class="absolute inset-0 bg-gray-700/50 hidden items-center justify-center">
              <span class="text-(--text-color) text-xs">Sem imagem</span>
            </div>
          </a>
        ) : (
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
        <h3 class="text-white text-sm font-bold mb-2 font-(family-name:--main-font)">
          {project.title}
        </h3>
        <p class="text-(--text-color) text-xs leading-relaxed mb-3">
          {project.description}
        </p>
        
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
  )
}

export default ProjectCard