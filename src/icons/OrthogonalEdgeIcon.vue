
<template>
  <Icon :iconName="'orthogonal-edge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OrthogonalEdgeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'orthogonal-edge'
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
