import Button from '../ui/Button'

function ProjectFilters({ activeFilter, onFilterClick }) {
  const filters = [
    { label: 'TODOS', value: 'all' },
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'JAVASCRIPT', value: 'javascript' },
    { label: 'REACT', value: 'react' },
    { label: 'VUE', value: 'vue' },
    { label: 'SCSS', value: 'scss' },
    { label: 'TAILWINDCSS', value: 'tailwindcss' },
  ]

  return (
    <div class="flex gap-2 mb-4 overflow-x-auto custom-scrollbar pb-2">
      <div class="flex gap-2 min-w-max">
        { filters.map((filter) => (
          <Button
            key={ filter.value }
            onClick={ () => onFilterClick( filter.value ) }
            isActive={activeFilter === filter.value}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ProjectFilters