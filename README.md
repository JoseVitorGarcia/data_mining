# 🧹 Text Mining PDF Cleaner

Este projeto faz a extração e limpeza de texto de arquivos `.pdf`, unificando todo o conteúdo em um único arquivo `.txt` para posterior análise de dados, mineração de texto, geração de nuvem de palavras, etc.

## ✨ Funcionalidades

- 📥 Lê todos os arquivos PDF de uma pasta
- 🧠 Extrai o texto de cada PDF
- 🔤 Converte tudo para minúsculas
- 🔢 Remove números
- ✂️ Remove pontuação
- 🆎 Remove letras isoladas (ex: "b", "c" soltas)
- ❌ Remove stopwords (palavras comuns em inglês, como "the", "and", "of")
- 📄 Salva todo o texto limpo em um único arquivo `resultado.txt`

## 🧰 Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [pdf-parse](https://www.npmjs.com/package/pdf-parse) – para extrair texto de PDFs
- [stopword](https://www.npmjs.com/package/stopword) – para remover palavras irrelevantes (stopwords)

## 🚀 Como usar

1. Clone o repositório ou crie seu projeto:
   ```bash
   git clone <url-do-repo>
   cd <nome-do-projeto>
2. Instale as dependências:
   ```bash
   npm install
1. Execute o comando:
   ```bash
   node script.js
