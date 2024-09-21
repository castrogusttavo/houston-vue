
<template>
  <Icon :iconName="'chart-maximum'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartMaximumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-maximum'
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
