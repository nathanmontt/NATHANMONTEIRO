function AboutSection() {
  return (
    <div class="h-[40em] overflow-y-scroll custom-scrollbar p-1">

      <h2 class="text-3xl md:text-4xl font-(family-name:--secondary-font) mb-4 text-white">
        SOBRE MIM
      </h2>
      <p class="text-(--text-color) leading-relaxed mb-3 text-sm">
        Sou um desenvolvedor Frontend em início de carreira, com habilidades que vão do básico ao intermediário em linguagens e ferramentas essenciais para o ambiente web moderno. Estou constantemente aprimorando minhas capacidades, construindo projetos que me ajudam a crescer tecnicamente e a aplicar boas práticas de desenvolvimento no dia a dia.
      </p>
      <p class="text-(--text-color) leading-relaxed text-sm">
        Sobre minhas <em>hard skills</em>:

        <ul class="list-disc ml-4">
          <li> <strong>HTML5</strong>, <strong>CSS3</strong> e <strong>SCSS</strong>: sei estruturar layouts responsivos, semanticamente corretos e escaláveis;</li>
          <li><strong>JavaScript (ES6+)</strong>: domínios e eventos no <em>DOM</em>, manipuladores assíncronos, <em>Fetch/APIs</em>, e lógica básica de programação;</li>
          <li><strong>Bibliotecas e frameworks</strong>: já desenvolvi projetos usando Vue.js e React, incluindo criação de componentes e projetos simples para o entendimento da <em>stack</em>;</li>
          <li><strong>Versionamento e ambiente</strong>: utilizo Git, GitHub e npm;</li>
          <li class="mb-3"><strong>Office (Word, Excel, PowerPoint)</strong>: apto a criar documentação técnica, relatórios e apresentações de resultados quando necessário.</li>
        </ul>
      </p>

      <p class="text-(--text-color) leading-relaxed text-sm mb-3">
        Para meu objetivo profissional, estou em busca de oportunidades que me permitam trabalhar com interfaces web modernas, aprender e crescer com profissionais mais experientes. Desejo construir mais do que páginas bonitas: quero atender requisitos reais, pensar em usabilidade, performance e acessibilidade, e continuar desenvolvendo minha carreira de forma sustentável e colaborativa. 
      </p>

      <p class="text-(--text-color) leading-relaxed text-sm mb-3">
        Obrigado por visitar meu portfólio. Se quiser compartilhar feedback ou discutir como posso contribuir com o seu projeto, fique à vontade para entrar em contato.
      </p>
    </div>
  )
}

export default AboutSection