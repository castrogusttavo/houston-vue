
<template>
  <Icon :iconName="'canvas'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CanvasIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'canvas'
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
