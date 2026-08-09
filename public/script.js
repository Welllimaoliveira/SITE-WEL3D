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
  note.textContent = "Cadastro demonstrativo enviado. A integração real será configurada depois.";
  note.style.color = "#70bd93";
  event.target.reset();
});

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
  }
};

const toolDialog = document.querySelector("#tool-dialog");

document.querySelectorAll(".tool-preview").forEach((button) => {
  button.addEventListener("click", () => {
    const preview = toolPreviews[button.dataset.tool];
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
