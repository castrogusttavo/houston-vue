<template>
  <div v-html="svgContent" :corner="{ width: size + 'px', height: size + 'px' }"></div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#000000',
    },
    variant: {
      type: String as PropType<'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone'>,
      default: 'stroke',
    },
    corner: {
      type: String as PropType<'sharp' | 'rounded' | 'standard'>,
      default: 'rounded',
    },
  },
  setup(props) {
    const svgContent = ref('');

    const loadSvg = async () => {
      const validatedIconName = String(props.iconName);
      const iconUrl = `https://cdn.hugeicons.com/icons/${validatedIconName}-${props.variant}-${props.corner}.svg`;

      try {
        const response = await fetch(iconUrl);
        const svgText = await response.text();
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgNode = svgDoc.documentElement;

        svgNode.setAttribute('width', props.size.toString());
        svgNode.setAttribute('height', props.size.toString());
        svgNode.setAttribute('color', props.color);

        svgNode.querySelectorAll('*').forEach((element) => {
          const hasFill = element.hasAttribute('fill');
          const hasStroke = element.hasAttribute('stroke');

          if (hasFill) {
            element.setAttribute('fill', 'currentColor');
          }
          if (hasStroke) {
            element.setAttribute('stroke', 'currentColor');
          }
        });

        svgContent.value = svgNode.outerHTML;
      } catch (error) {
        console.error(`Error loading SVG icon: ${error}`);
        svgContent.value = '';
      }
    };

    watch([() => props.iconName, () => props.size, () => props.variant, () => props.corner, () => props.color], loadSvg);

    loadSvg();

    return { svgContent };
  },
});
</script>
