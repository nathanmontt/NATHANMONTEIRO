function CurriculumSection() {
  return (
    <div class="text-left">
      <h2 class="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">
        CURRÍCULO
      </h2>
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
}

export default CurriculumSection