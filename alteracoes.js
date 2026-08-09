var alteracoes = [
  {
    data: "09/08/2026",
    hora: "00:00",
    solicitado: "Alterar site para finalizar emprego Tidas Tecnologia em 07/2026 e iniciar Senai em 08/2026 como professor de Tecnologia da Informação e Comunicação",
    feito: "Adicionada entrada Senai SC (08/2026–Atual) no topo da timeline; período Tidas Tecnologia atualizado para 07/2026; empresa renomeada de T2 para Tidas Tecnologia; hero card e sobre.p3 atualizados para Senai SC em PT, EN e ES"
  },
  {
    data: "09/08/2026",
    hora: "00:05",
    solicitado: "Adicionar experiência da IBS Sistemas lendo dados do LinkedIn",
    feito: "Lido perfil LinkedIn; adicionadas duas entradas: Analista de Qualidade (02/2013–07/2015) e Especialista em Suporte de TI (08/2011–02/2013) no index.html, main.js e languages.json nos três idiomas"
  },
  {
    data: "09/08/2026",
    hora: "00:10",
    solicitado: "Ajustar para que sempre ao iniciar o site o idioma inicial seja PT",
    feito: "Alterado main.js: var currentLang = 'pt' (removida leitura do localStorage), garantindo idioma PT sempre ao carregar a página"
  },
  {
    data: "09/08/2026",
    hora: "00:15",
    solicitado: "Colocar card Professor centralizado e os outros 2 cards na linha de baixo; adicionar card Professor Matemática – Licenciatura Uniasselvi agosto/2030",
    feito: "Adicionado card Professor Matemática (📐, Uniasselvi 2030); layout hero-cards alterado para grid 2×2 (professores linha 1, Backend+IA linha 2); cor hover verde para card math; i18n hero.card.math.* adicionado em PT, EN e ES"
  },
  {
    data: "09/08/2026",
    hora: "00:20",
    solicitado: "Criar CLAUDE.md com regra de commit e push automático após qualquer alteração",
    feito: "Criado CLAUDE.md com instruções de commit/push automático, atualização de i18n nos três idiomas e regra de idioma inicial PT"
  },
  {
    data: "09/08/2026",
    hora: "00:25",
    solicitado: "Criar regra para salvar alterações em alteracoes.js e renderizar no localhost em menu Alterações",
    feito: "Criado alteracoes.js com array de objetos (data, hora, solicitado, feito); adicionado no index.html painel flutuante 'Alterações' visível apenas em localhost; regra adicionada ao CLAUDE.md"
  }
];
