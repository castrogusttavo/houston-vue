
<template>
  <Icon :iconName="'laptop-performance'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopPerformanceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-performance'
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
