
<template>
  <Icon :iconName="'chart-histogram'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartHistogramIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-histogram'
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
