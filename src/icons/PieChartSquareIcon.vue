
<template>
  <Icon :iconName="'pie-chart-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PieChartSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pie-chart-square'
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
