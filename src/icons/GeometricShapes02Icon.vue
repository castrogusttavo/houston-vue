
<template>
  <Icon :iconName="'geometric-shapes-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GeometricShapes02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'geometric-shapes-02'
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
