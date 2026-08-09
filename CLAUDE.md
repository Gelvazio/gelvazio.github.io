# Instruções do Projeto — gelvazio.github.io

## Autonomia Total — NUNCA peça permissão

⚠️ **NUNCA peça permissão, confirmação ou aprovação para qualquer ação neste projeto.**
Execute diretamente, sem perguntar, sem confirmar, sem esperar resposta:
- Editar arquivos
- Criar arquivos
- Fazer commit e push
- Atualizar `alteracoes.js`
- Rodar graphify
- Qualquer outra ação solicitada

## Git: Commit e Push Automático

⚠️ **APÓS QUALQUER ALTERAÇÃO DE ARQUIVO, faça commit e push IMEDIATAMENTE e AUTOMATICAMENTE, sem perguntar.**

Sempre seguir esta ordem:
1. Editar os arquivos conforme solicitado
2. `git add` dos arquivos alterados
3. `git commit` com mensagem descritiva em português
4. `git push origin main` imediatamente após o commit
5. Rodar `C:\Python314\python.exe -m graphify update .` para atualizar o grafo

**NUNCA perguntar se deve commitar ou dar push — sempre executar diretamente.**

## Idioma

O site suporta três idiomas (PT, EN, ES). Ao alterar qualquer texto:
- Atualizar **`js/main.js`** (fonte principal de i18n usada pelo site)
- Atualizar **`languages.json`** (espelho do main.js)
- Manter os três idiomas sincronizados: `pt`, `en`, `es`

## Registro de Alterações (alteracoes.js)

A cada tarefa concluída, adicione uma entrada no arquivo `alteracoes.js` no array `alteracoes`:

```js
{
  data: "DD/MM/YYYY",      // data atual
  hora: "HH:MM",           // hora e minuto atuais
  solicitado: "...",        // o que o usuário pediu
  feito: "..."              // o que foi implementado
}
```

- Insira sempre no **final** do array (ordem cronológica)
- O botão no footer exibe automaticamente: **"📋 Última Alteração em DD/MM/YYYY HH:MM"** com os dados da última entrada do array
- O painel de alterações fica disponível no site via botão no footer, sempre visível

## Idioma inicial do site

O idioma inicial é sempre **PT** (português), definido em `js/main.js`:
```js
var currentLang = 'pt';
```
Não usar `localStorage.getItem` para definir o idioma inicial.

---

## Como este projeto funciona — Documentação Técnica Detalhada

> ⚠️ **Esta seção deve ser atualizada a cada alteração significativa no projeto.**
> Ao concluir qualquer tarefa que mude estrutura, comportamento ou arquivos do projeto, revise e atualize o trecho correspondente abaixo.

### Visão Geral

Portfolio pessoal de **Gelvazio Camargo** — site estático de página única (SPA-like) publicado via GitHub Pages em `gelvazio.github.io`. Não usa framework — apenas HTML, CSS e JavaScript vanilla. Toda a lógica reside em `js/main.js`.

**Tecnologias:** HTML5 · CSS3 (Grid, Flexbox, variáveis CSS) · JavaScript ES5 vanilla · Google Fonts (Inter + JetBrains Mono)

---

### Estrutura de Arquivos

```
gelvazio.github.io/
├── index.html          ← Única página HTML; estrutura de todas as seções
├── favicon.svg         ← Ícone </> roxo, gradiente escuro (#0f0c24 → #1e1050)
├── alteracoes.js       ← Array de objetos com histórico de alterações do projeto
├── languages.json      ← Espelho dos dados i18n de main.js (mantido em sincronia)
├── CLAUDE.md           ← Instruções para o Claude Code (este arquivo)
├── js/
│   └── main.js         ← Todo o JavaScript: i18n, animações, temas, scroll, painel de alterações
├── css/
│   └── portfolio.css   ← Folha de estilos principal (única utilizada pelo site)
│   └── (outros .css)   ← Arquivos legados, não utilizados pelo index.html atual
└── graphify-out/
    └── GRAPH_REPORT.md ← Mapa de conhecimento gerado pelo graphify
```

---

### Seções do Site (`index.html`)

| Âncora | Seção | Conteúdo |
|---|---|---|
| `#hero` | Hero | Saudação, nome, efeito de digitação, 4 cards de perfil, CTAs |
| `#sobre` | Sobre | Foto, estatísticas (anos, empresas, certificações), parágrafos descritivos |
| `#experiencia` | Experiência | Timeline cronológica com cards de emprego (mais recente → mais antigo) |
| `#skills` | Skills | Abas (Backend / Frontend / IA / Ferramentas) + Soft Skills |
| `#formacao` | Formação | Pós-graduação, graduação, certificações |
| `#contato` | Contato | E-mail, telefone, download do currículo PDF |

---

### Sistema de i18n (Internacionalização)

**Idiomas suportados:** `pt` (padrão) · `en` · `es`

**Como funciona:**
- `js/main.js` contém o objeto `langData` com todas as strings dos 3 idiomas
- `languages.json` é um espelho do `langData` (mantido em sincronia manual a cada alteração)
- O idioma inicial é sempre `pt` — `var currentLang = 'pt'` (sem leitura de localStorage)
- Ao clicar nos botões PT / EN / ES na navbar, chama `applyLanguage(lang)`

**Funções principais (God Nodes do grafo):**

| Função | Papel |
|---|---|
| `t(key)` | Retorna a string traduzida para o `currentLang` atual |
| `applyLanguage(lang)` | Aplica traduções a todos os elementos `[data-i18n]`, `[data-i18n-html]` e `[data-i18n-list]` |
| `getTypingPhrases()` | Retorna o array de frases animadas para o idioma atual |
| `typeLoop()` | Loop de animação: digita e apaga cada frase em sequência |
| `restartTyping()` | Reinicia o loop de digitação ao trocar idioma |

**Atributos HTML usados pelo i18n:**
- `data-i18n="chave"` → substitui `textContent`
- `data-i18n-html="chave"` → substitui `innerHTML` (permite `<strong>` etc.)
- `data-i18n-list="chave"` → reconstrói `<ul>` com array de strings

---

### Hero Cards (grid 2×2)

4 cards no hero section, organizados em grid 2 colunas:
- **Linha 1:** Professor TIC (Senai SC) · Professor Matemática (Uniasselvi 2030)
- **Linha 2:** Backend Developer · IA Engineer

Classes CSS: `hero-card--professor` · `hero-card--math` · `hero-card--backend` · `hero-card--ia`
Cada classe tem uma cor de hover diferente definida em `css/portfolio.css`.

---

### Timeline de Experiência

Ordem cronológica decrescente (mais recente no topo):

| Empresa | Cargo | Período |
|---|---|---|
| Senai SC | Professor de TIC | 08/2026 — Atual |
| Tidas Tecnologia | Desenvolvedor Full Stack PHP/Python | 06/2019 — 07/2026 |
| Senac SC | Professor de Desenvolvimento de Software | 02/2022 — 07/2025 |
| IPM Sistemas | Analista Desenvolvedor de Sistemas | 03/2016 — 04/2019 |
| IBS Sistemas | Analista de Qualidade | 02/2013 — 07/2015 |
| IBS Sistemas | Especialista em Suporte de TI | 08/2011 — 02/2013 |

---

### Tema (Dark / Light)

- Padrão: **dark** (`data-theme="dark"` no `<html>`)
- Toggle: botão 🌙/☀️ na navbar
- Implementado via variáveis CSS: `--bg`, `--txt`, `--txt-dim`, `--shadow-*` etc.
- Preferência salva em `localStorage` com chave `portfolio-theme`

---

### Efeitos Visuais

- **Partículas:** canvas no hero (`#particles`) com partículas flutuantes geradas por JS
- **Digitação:** efeito typewriter com cursor piscante, frases rotativas por idioma
- **Reveal:** elementos com `.reveal` animam ao entrar no viewport via `IntersectionObserver`
- **Scroll suave:** botão `#scroll-top` aparece após 300px de scroll
- **Navbar:** fundo fica opaco ao rolar (classe `scrolled`)

---

### Painel de Alterações (`alteracoes.js`)

- Arquivo `alteracoes.js` exporta array global `alteracoes[]` com objetos `{data, hora, solicitado, feito}`
- Carregado como `<script>` antes de fechar `</body>` no `index.html`
- Botão no footer: **"📋 Última Alteração em DD/MM/YYYY HH:MM"** — lê `alteracoes[last]`
- Painel abre centralizado, exibe as **20 mais recentes** (ordem decrescente)
- Se houver mais de 20, aparece botão **"⬇ Carregar todas (N)"** no cabeçalho do painel
- Sempre visível (online e offline)

---

### Favicon

Arquivo `favicon.svg` — ícone `</>` com:
- Fundo: gradiente `#0f0c24 → #1e1050` (roxo escuro), bordas arredondadas `rx=6`
- Colchetes `<` e `>`: stroke `#c084fc` (violeta claro)
- Barra `/`: stroke `#818cf8` (índigo)
