# Instruções do Projeto — gelvazio.github.io

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

## Idioma inicial do site

O idioma inicial é sempre **PT** (português), definido em `js/main.js`:
```js
var currentLang = 'pt';
```
Não usar `localStorage.getItem` para definir o idioma inicial.
