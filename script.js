const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const sw = require("stopword");

// Função para limpar o texto
function limparTexto(texto) {
  return sw
    .removeStopwords(
      texto
        .toLowerCase()
        .replace(/[\d]+/g, "") // remove números
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"?¿¡!«»<>[\]@©•-]/g, "") // remove pontuação
        .replace(/\b[a-zA-Z]\b/g, "")
        .split(/\s+/), // separa por espaços
      sw.en
    )
    .join(" ");
}

// Processa todos os PDFs da pasta e salva tudo em um txt
async function processarPdfs(pasta, arquivoSaida) {
  const arquivos = fs.readdirSync(pasta).filter((f) => f.endsWith(".pdf"));
  let textoFinal = "";

  for (const arquivo of arquivos) {
    const caminho = path.join(pasta, arquivo);
    const dataBuffer = fs.readFileSync(caminho);
    const data = await pdfParse(dataBuffer);
    const textoLimpo = limparTexto(data.text);
    textoFinal += textoLimpo + "\n\n"; // separa cada PDF com quebras de linha
    console.log(`✔️ Processado: ${arquivo}`);
  }

  fs.writeFileSync(arquivoSaida, textoFinal, "utf8");
  console.log(`\n✅ Texto final salvo em: ${arquivoSaida}`);
}

// Use o caminho correto da sua pasta e o nome do arquivo final
processarPdfs("./artigos/ciencia_de_dados", "corpus.txt");
