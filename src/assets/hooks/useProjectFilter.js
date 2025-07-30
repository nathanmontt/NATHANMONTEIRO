import { useState } from 'react'
import { projectsData } from '../data/projects'

export const useProjectFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return projectsData
    }
    return projectsData.filter(project => 
      project.tags.includes(activeFilter)
    )
  }

  const handleFilterClick = (tag) => {
    setActiveFilter(tag)
  }

  return {
    activeFilter,
    getFilteredProjects,
    handleFilterClick
  }
}