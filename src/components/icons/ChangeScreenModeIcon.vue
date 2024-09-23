<template>
  <Icon iconName="change-screen-mode" v-bind="{ iconSize, color, fillType, cornerStyle }" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  name: 'ChangeScreenModeIcon',
  components: { Icon },
  props: {
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
});
</script>