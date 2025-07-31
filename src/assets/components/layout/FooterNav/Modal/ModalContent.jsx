import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import CurriculumSection from './sections/CurriculumSection'

function ModalContent({ activeModal }) {
  const renderContent = () => {
    switch(activeModal) {
      case 'sobre':
        return <AboutSection />
      case 'projetos':
        return <ProjectsSection />
      case 'contato':
        return <ContactSection />
      case 'curriculo':
        return <CurriculumSection />
      default:
        return null
    }
  }

  return renderContent()
}

export default ModalContent