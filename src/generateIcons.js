const fs = require('fs');
const path = require('path');

// Lê o arquivo .json com os dados dos ícones
const iconsData = require('../IconsNames.json');

// Caminho onde os ícones serão criados
const iconsDir = path.join(__dirname, 'icons');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}

// Função para gerar o conteúdo de cada componente Vue
const generateIconComponent = (name, iconName) => `
<template>
  <Icon :iconName="'${iconName}'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: '${name}',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '${iconName}'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
`;

// Gera um arquivo .vue para cada ícone
iconsData.forEach(icon => {
  const componentContent = generateIconComponent(icon.nameArchive, icon.iconName);
  fs.writeFileSync(path.join(iconsDir, `${icon.nameArchive}.vue`), componentContent);
});

console.log('Componentes de ícones gerados com sucesso!');

// Função para gerar o conteúdo do index.js usando import()
const generateIndexFileContent = (icons) => {
  return icons.map(icon => {
    return `export const ${icon.nameArchive} = () => import('./icons/${icon.nameArchive}.vue');`;
  }).join('\n');
};

// Gera o arquivo index.js com lazy loading
const indexFilePath = path.join(__dirname, 'index.js');
const indexFileContent = generateIndexFileContent(iconsData);

fs.writeFileSync(indexFilePath, indexFileContent);

console.log('Arquivo index.js gerado com sucesso!');
