import ProjectFilters from '../../../../filters/ProjectFilters'
import ProjectCard from '../../../../ui/ProjectCard'
import { useProjectFilter } from '../../../../../hooks/useProjectFilter'

function ProjectsSection() {
  const { activeFilter, getFilteredProjects, handleFilterClick } = useProjectFilter()

  return (
    <div className="container-projects">
      <h2 className="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">
        PROJETOS
      </h2>
      
      <ProjectFilters 
        activeFilter={activeFilter}
        onFilterClick={handleFilterClick}
      />

      <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar pr-2">
        {getFilteredProjects().map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection