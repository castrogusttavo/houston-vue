
<template>
  <Icon :iconName="'geometric-shapes-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GeometricShapes01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'geometric-shapes-01'
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
