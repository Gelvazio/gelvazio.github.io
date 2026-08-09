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
    feito: "Criado alteracoes.js com array de objetos (data, hora, solicitado, feito); botão flutuante discreto no footer após 'Todos os direitos reservados.'; painel sempre visível online e offline; regra adicionada ao CLAUDE.md"
  },
  {
    data: "09/08/2026",
    hora: "00:30",
    solicitado: "Criar favicon de tecnologia para o site, adicionar no site e publicar",
    feito: "Criado favicon.svg com ícone </> (código), fundo gradiente roxo escuro (#0f0c24→#1e1050), colchetes em #c084fc e barra em #818cf8; adicionado <link rel='icon'> no index.html"
  },
  {
    data: "09/08/2026",
    hora: "00:31",
    solicitado: "Atualizar CLAUDE.md para nunca pedir permissão — sempre executar diretamente",
    feito: "Adicionada seção 'Autonomia Total' no CLAUDE.md instruindo execução direta sem confirmações para qualquer ação (editar, criar, commit, push, graphify)"
  },
  {
    data: "09/08/2026",
    hora: "00:35",
    solicitado: "Botão de alterações deve exibir 'Última Alteração em Data Hora:Minuto' da última entrada do array; salvar regra no CLAUDE.md",
    feito: "Atualizado script no index.html: botão exibe '📋 Última Alteração em [data] [hora]' lendo a última entrada de alteracoes.js; regra documentada no CLAUDE.md"
  },
  {
    data: "09/08/2026",
    hora: "00:40",
    solicitado: "Painel de alterações: exibir apenas as 20 últimas; botão 'Carregar todas as alterações' no cabeçalho ao lado do título quando houver mais de 20",
    feito: "Script atualizado: renderiza até 20 entradas; botão 'Carregar todas (N)' no header entre o título e o ✕; ao clicar substitui o conteúdo por todas as entradas e remove o botão"
  },
  {
    data: "09/08/2026",
    hora: "00:45",
    solicitado: "Adicionar seção detalhada no CLAUDE.md explicando como o projeto funciona, com base no graphify, e regra de atualizar a cada alteração",
    feito: "Adicionada seção 'Como este projeto funciona' no CLAUDE.md com: visão geral, estrutura de arquivos, seções do site, sistema i18n, god nodes do grafo (t, applyLanguage, getTypingPhrases, typeLoop, restartTyping), hero cards, timeline de experiências, tema, efeitos visuais, painel de alterações e favicon"
  }
];
