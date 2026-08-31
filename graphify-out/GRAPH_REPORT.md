# Graph Report - gelvazio.github.io  (2026-08-09)

## Corpus Check
- 6 files · ~10,712 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 31 nodes · 32 edges · 5 communities (4 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8cd48c82`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 4|Community 4]]

## God Nodes (most connected - your core abstractions)
1. `Como este projeto funciona — Documentação Técnica Detalhada` - 11 edges
2. `Instruções do Projeto — gelvazio.github.io` - 8 edges
3. `t()` - 3 edges
4. `applyLanguage()` - 3 edges
5. `getTypingPhrases()` - 3 edges
6. `typeLoop()` - 3 edges
7. `restartTyping()` - 3 edges
8. `Autonomia Total — NUNCA peça permissão` - 1 edges
9. `Git: Commit e Push Automático` - 1 edges
10. `Idioma` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (5 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.36
Nodes (5): applyLanguage(), getTypingPhrases(), restartTyping(), t(), typeLoop()

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (7): Autonomia Total — NUNCA peça permissão, Git: Commit e Push Automático, Idioma, Idioma inicial do site, Instruções do Projeto — gelvazio.github.io, ⚠️ LLMS.txt — Atualização Obrigatória, Registro de Alterações (alteracoes.js)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (11): Como este projeto funciona — Documentação Técnica Detalhada, Efeitos Visuais, Estrutura de Arquivos, Favicon, Hero Cards (grid 2×2), Painel de Alterações (`alteracoes.js`), Seções do Site (`index.html`), Sistema de i18n (Internacionalização) (+3 more)

## Knowledge Gaps
- **17 isolated node(s):** `Autonomia Total — NUNCA peça permissão`, `Git: Commit e Push Automático`, `Idioma`, `⚠️ LLMS.txt — Atualização Obrigatória`, `Registro de Alterações (alteracoes.js)` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Como este projeto funciona — Documentação Técnica Detalhada` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.287) - this node is a cross-community bridge._
- **Why does `Instruções do Projeto — gelvazio.github.io` connect `Community 1` to `Community 4`?**
  _High betweenness centrality (0.225) - this node is a cross-community bridge._
- **What connects `Autonomia Total — NUNCA peça permissão`, `Git: Commit e Push Automático`, `Idioma` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._