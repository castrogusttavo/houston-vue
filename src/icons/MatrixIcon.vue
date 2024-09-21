
<template>
  <Icon :iconName="'matrix'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MatrixIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'matrix'
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
