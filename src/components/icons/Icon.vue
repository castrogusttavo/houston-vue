<template>
  <img 
    :src="iconUrl" 
    :alt="iconName" 
    :style="{ width: iconSize + 'px', height: iconSize + 'px', fill: color }" 
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

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
    const validatedIconName = props.iconName;
    const iconUrl = `https://cdn.hugeicons.com/icons/${validatedIconName}-${props.fillType}-${props.cornerStyle}.svg`;
    return { iconUrl };
  },
});
</script>
