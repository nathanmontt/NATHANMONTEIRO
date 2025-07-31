import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

function ModalContent({ activeModal }) {
  const renderContent = () => {
    switch(activeModal) {
      case 'sobre':
        return <AboutSection />
      case 'projetos':
        return <ProjectsSection />
      case 'contato':
        return <ContactSection />
      default:
        return null
    }
  }

  return renderContent()
}

export default ModalContent