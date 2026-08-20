const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".faq-list details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

document.querySelector("#waitlist-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.querySelector("#form-note");
  note.textContent = "Cadastro demonstrativo recebido. A integração com lista/e-mail será configurada na próxima etapa.";
  note.style.color = "#70bd93";
  event.target.reset();
});

const communityForm = document.querySelector("#community-form");
if (communityForm) {
  communityForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#community-email").value.trim();
    const question = document.querySelector("#community-question").value.trim();
    const subject = encodeURIComponent("Dúvida para a comunidade WellTec3D");
    const body = encodeURIComponent(`E-mail: ${email}\n\nDúvida ou sugestão:\n${question}`);
    window.location.href = `mailto:welltec3d@outlook.com?subject=${subject}&body=${body}`;
    const note = document.querySelector("#community-note");
    note.textContent = "Abri seu e-mail com a mensagem pronta para enviar.";
    note.style.color = "#176b9c";
  });
}

const toolPreviews = {
  distribuidores: {
    tech: "PYREVIT · MODELAGEM",
    title: "Gerar distribuidores",
    summary: "Estudo de automação para acelerar a criação e a organização de distribuidores de ar em projetos de instrumentação.",
    problem: "Criar, posicionar e conferir vários distribuidores manualmente consome tempo e aumenta a chance de inconsistências.",
    process: "A ferramenta reúne os dados necessários, aplica regras de criação e organiza os elementos no modelo.",
    result: "Distribuidores criados de forma padronizada e preparados para documentação e quantitativos."
  },
  simbolos: {
    tech: "PYREVIT · DOCUMENTAÇÃO",
    title: "Gerar símbolos",
    summary: "Automação para transformar informações do modelo em símbolos de planta consistentes.",
    problem: "Ajustes manuais de simbologia se repetem em várias vistas e podem ficar desconectados dos elementos.",
    process: "Os elementos são identificados, classificados e representados conforme regras definidas para a disciplina.",
    result: "Simbologia mais uniforme, com menos tarefas repetitivas durante a documentação."
  },
  materiais: {
    tech: "PYREVIT · EXCEL",
    title: "Gerar lista de materiais",
    summary: "Fluxo para selecionar tabelas do Revit e gerar uma lista de materiais usando um modelo Excel.",
    problem: "Copiar tabelas e montar listas manualmente gera retrabalho e erros de transcrição.",
    process: "A ferramenta coleta as tabelas selecionadas, organiza os dados e aplica a estrutura do template.",
    result: "Lista de materiais padronizada e pronta para revisão antes da emissão."
  },
  parametros: {
    tech: "PYREVIT · DADOS",
    title: "Importar parâmetros do Excel",
    summary: "Atualização controlada de parâmetros do Revit a partir de uma planilha e uma coluna-chave.",
    problem: "Atualizar muitos elementos individualmente é lento e dificulta a conferência das mudanças.",
    process: "A rotina cruza a chave da planilha com o modelo e apresenta uma prévia antes de aplicar os valores.",
    result: "Parâmetros atualizados em lote, com maior rastreabilidade e segurança."
  },
  suporte: {
    tech: "PYREVIT · QUALIDADE",
    title: "Encontrar suporte associado",
    summary: "Ferramenta para localizar o suporte mais próximo e preencher sua TAG no elemento de instrumentação.",
    problem: "A relação entre instrumentos e suportes pode ficar implícita e difícil de verificar.",
    process: "A rotina analisa proximidade, identifica o suporte candidato e registra a associação.",
    result: "Rastreabilidade entre elementos e apoio às verificações de modelagem."
  },
  cabos: {
    tech: "C# · CABOS",
    title: "Roda cabos",
    summary: "Conjunto avançado para apoiar estudos de caminhos, comprimentos e ocupação relacionados aos cabos.",
    problem: "Analisar rotas e ocupações manualmente exige cruzar muitas informações do projeto.",
    process: "A solução organiza dados dos elementos e aplica critérios para estudar alternativas de caminho.",
    result: "Informações consolidadas para análise técnica e tomada de decisão."
  },
  rota: {
    tech: "C# · ROTEAMENTO",
    title: "Rota de eletroduto",
    summary: "Ferramenta avançada para estudar encaminhamentos possíveis entre pontos do modelo.",
    problem: "Definir rotas em ambientes industriais pode envolver muitas restrições e alternativas.",
    process: "A solução utiliza dados geométricos e regras do projeto para avaliar um encaminhamento.",
    result: "Uma proposta de rota que pode ser revisada e validada pelo profissional."
  },
  dimensionar: {
    tech: "C# · DIMENSIONAMENTO",
    title: "Dimensionar eletroduto",
    summary: "Organização de dados e critérios para apoiar o dimensionamento de eletrodutos.",
    problem: "O dimensionamento depende de informações dispersas sobre cabos, ocupação e critérios.",
    process: "A ferramenta reúne os dados relevantes e aplica as regras configuradas para a análise.",
    result: "Resultado estruturado para conferência e decisão do projetista."
  },
  xyz: {
    tech: "DYNAMO · COORDENADAS",
    title: "Instrumentos por XYZ",
    summary: "Fluxo didático para criar ou posicionar instrumentos a partir de coordenadas e dados estruturados.",
    problem: "Inserir instrumentos manualmente em grandes áreas aumenta retrabalho e dificulta conferir posição, TAG e elevação.",
    process: "A rotina lê uma base de dados, interpreta coordenadas e aplica regras para posicionar elementos no modelo.",
    result: "Instrumentos posicionados com lógica de dados, prontos para revisão técnica e documentação."
  },
  excelRevit: {
    tech: "DYNAMO · EXCEL",
    title: "Integração Excel Revit",
    summary: "Conexão entre planilhas e modelo para importar, revisar e atualizar informações com mais consistência.",
    problem: "Planilhas e modelo costumam evoluir separados, criando divergência entre lista, planta e parâmetros.",
    process: "O fluxo cruza chaves, valida colunas e mostra como transformar Excel em entrada controlada de automação.",
    result: "Dados mais rastreáveis e um caminho claro para atualizar o modelo sem retrabalho manual."
  },
  coordenadas: {
    tech: "DYNAMO · LOCALIZAÇÃO",
    title: "Coordenadas, grid e elevação",
    summary: "Conjunto de rotinas para preencher informações de localização dos elementos do projeto.",
    problem: "Sem coordenadas, grid e elevação bem preenchidos, listas e conferências perdem valor técnico.",
    process: "A automação lê a posição dos elementos, relaciona com referências do projeto e grava parâmetros úteis.",
    result: "Tabelas mais completas e elementos com informações de localização prontas para revisão."
  },
  buscador: {
    tech: "DYNAMO · INTERFACE",
    title: "Buscador de elementos",
    summary: "Prévia de uma evolução das rotinas para ferramentas com interface e filtros de consulta.",
    problem: "Encontrar elementos específicos em modelos grandes pode tomar tempo e depender de filtros manuais.",
    process: "A ferramenta organiza critérios de busca, filtra elementos e aproxima o usuário de uma interface dedicada.",
    result: "Consulta mais rápida de informações e um exemplo de caminho entre Dynamo, formulários e C#."
  },
  documentos: {
    tech: "EXCEL · CONTROLE",
    title: "Controle de documentos",
    summary: "Fluxo para organizar documentos, revisões, status e rastreabilidade de emissão.",
    problem: "Emissões técnicas exigem controle de revisão, status e consistência entre arquivos e listas.",
    process: "A rotina estrutura os dados em planilha e ajuda a padronizar consulta, atualização e conferência.",
    result: "Controle mais claro do pacote de documentos e apoio à gestão técnica do projeto."
  },
  dwg: {
    tech: "PYREVIT · EXPORTAÇÃO",
    title: "Exportar DWG instrumentação",
    summary: "Automação para padronizar exportações e reduzir ajustes repetitivos na entrega em CAD.",
    problem: "Exportar vistas uma a uma aumenta erro de configuração, nomes fora do padrão e retrabalho.",
    process: "A ferramenta organiza vistas, parâmetros e regras de saída para gerar arquivos com mais padrão.",
    result: "Exportações mais consistentes e melhor controle no fechamento das plantas."
  },
  extratorE3d: {
    tech: "NAVISWORKS · E3D",
    title: "Extrator de conexões E3D",
    summary: "Fluxo para transformar varreduras e conectividade do ambiente industrial em dados analisáveis.",
    problem: "Informações de conexão podem ficar escondidas no modelo e difíceis de usar em estudos externos.",
    process: "O extrator converte dados de conectividade em CSV para análise, testes e preparação de rotas.",
    result: "Base estruturada para investigar caminhos, ligações e relações entre elementos."
  },
  roteadorE3d: {
    tech: "NAVISWORKS · ROTAS",
    title: "Roteador E3D",
    summary: "Protótipo visual para estudar caminhos entre elementos usando grafos e regras de conectividade.",
    problem: "Escolher um caminho técnico entre pontos exige entender alternativas e restrições do modelo.",
    process: "A rotina transforma conexões em grafo, testa vizinhanças e apresenta uma rota possível para análise.",
    result: "Uma visão didática de roteamento para apoiar estudos com Navisworks, E3D e dados."
  },
  autolisp: {
    tech: "AUTOCAD · LISP",
    title: "Rotina AutoLISP didática",
    summary: "Produto de entrada para ensinar uma automação simples de tags e produtividade no AutoCAD.",
    problem: "Muitos profissionais querem começar a automatizar, mas pulam direto para soluções complexas.",
    process: "O workbook ensina uma rotina pequena, explicada passo a passo, com exercício e desafio final.",
    result: "Primeira automação funcional e uma ponte natural para Dynamo, Revit e ferramentas maiores."
  },
  iaRevit: {
    tech: "IA · REVIT",
    title: "Revit com ChatGPT",
    summary: "Módulo para usar inteligência artificial como apoio no raciocínio, criação e revisão de automações.",
    problem: "A IA ajuda bastante, mas sem método ela pode gerar scripts frágeis ou fora da realidade do projeto.",
    process: "O aluno aprende a formular prompts técnicos, validar respostas e transformar ideias em testes controlados.",
    result: "Uso mais consciente da IA para acelerar estudo, documentação e desenvolvimento de ferramentas."
  }
};

const toolDialog = document.querySelector("#tool-dialog");

document.querySelectorAll(".tool-preview").forEach((button) => {
  button.addEventListener("click", () => {
    const preview = toolPreviews[button.dataset.tool];
    if (!preview) return;
    document.querySelector("#tool-dialog-tech").textContent = preview.tech;
    document.querySelector("#tool-dialog-title").textContent = preview.title;
    document.querySelector("#tool-dialog-summary").textContent = preview.summary;
    document.querySelector("#tool-dialog-problem").textContent = preview.problem;
    document.querySelector("#tool-dialog-process").textContent = preview.process;
    document.querySelector("#tool-dialog-result").textContent = preview.result;
    toolDialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => toolDialog.close());

toolDialog.addEventListener("click", (event) => {
  if (event.target === toolDialog) toolDialog.close();
});
