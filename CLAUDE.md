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
