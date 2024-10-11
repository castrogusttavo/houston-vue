import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obter o caminho correto do arquivo ao usar ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para a pasta com os arquivos
const folderPath = path.join(__dirname, './src/components/icons');

// Função para substituir os termos nos arquivos
const replaceInFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erro ao ler o arquivo: ${filePath}`, err);
      return;
    }

    // Realiza as substituições necessárias
    let modifiedData = data
      .replace(/style/g, 'corner');

    // Se o conteúdo foi modificado, sobrescreve o arquivo
    if (modifiedData !== data) {
      fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
        if (err) {
          console.error(`Erro ao escrever no arquivo: ${filePath}`, err);
        } else {
          console.log(`Modificações aplicadas ao arquivo: ${filePath}`);
        }
      });
    }
  });
};

// Função para percorrer todos os arquivos da pasta
const processFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Erro ao ler a pasta: ${folderPath}`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      // Verifica se é um arquivo e aplica a função de substituição
      if (fs.statSync(filePath).isFile()) {
        replaceInFile(filePath);
      }
    });
  });
};

// Chama a função para processar a pasta
processFolder(folderPath);
