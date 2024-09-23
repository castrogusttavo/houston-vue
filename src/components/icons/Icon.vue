<template>
  <div v-html="svgContent" :style="{ width: iconSize + 'px', height: iconSize + 'px' }"></div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconSize: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    fillType: {
      type: String as PropType<'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone'>,
      default: 'stroke',
    },
    cornerStyle: {
      type: String as PropType<'sharp' | 'rounded' | 'standard'>,
      default: 'rounded',
    },
  },
  setup(props) {
    const svgContent = ref('');

    onMounted(async () => {
      const validatedIconName = props.iconName;
      const iconUrl = `https://cdn.hugeicons.com/icons/${validatedIconName}-${props.fillType}-${props.cornerStyle}.svg`;

      try {
        const response = await fetch(iconUrl);
        const svgText = await response.text();

        const modifiedSvg = svgText
          .replace(/fill="[^"]*"/g, `fill="${props.color}"`)
          .replace(/stroke="[^"]*"/g, `stroke="${props.color}"`);

        svgContent.value = modifiedSvg;
      } catch (error) {
        console.error('Erro ao carregar o SVG:', error);
      }
    });

    return { svgContent };
  },
});
</script>
