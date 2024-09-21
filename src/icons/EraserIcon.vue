
<template>
  <Icon :iconName="'eraser'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EraserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eraser'
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
