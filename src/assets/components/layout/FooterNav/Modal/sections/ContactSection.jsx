function ContactSection() {
  const handleContactForm = () => { window.open('https://forms.gle/6Nfz8T4C6CzB65k59', '_blank'); };

  const linkedinLink = () => { window.open('https://www.linkedin.com/in/nathan-monteiro/', '_blank'); };

  const githubLink = () => { window.open('https://github.com/nathanmontt', '_blank'); };

  return (
    <div class="text-left">
      <h2 class="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">
        CONTATO
      </h2>
      <ul class="space-y-2 text-(--text-color) text-sm">
        <li><button onClick={linkedinLink} class="hover:text-gray-700 cursor-pointer transition-colors">Linkedin</button></li>
        <li><button onClick={githubLink} class="hover:text-gray-700 cursor-pointer transition-colors">GitHub</button></li>
        <li><button onClick={handleContactForm} class=" border-1 p-2 bg-(--text-color)
        text-black hover:text-(--text-color) hover:bg-(--secondary-color) cursor-pointer transition-all">Enviar Proposta</button>
        </li>
      </ul>
    </div>
  )
}

export default ContactSection