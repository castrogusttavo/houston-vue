
<template>
  <Icon :iconName="'ai-eraser'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiEraserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-eraser'
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
