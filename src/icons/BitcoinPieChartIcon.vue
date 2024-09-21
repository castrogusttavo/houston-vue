
<template>
  <Icon :iconName="'bitcoin-pie-chart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinPieChartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-pie-chart'
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
