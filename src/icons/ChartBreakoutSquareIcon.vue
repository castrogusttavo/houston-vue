
<template>
  <Icon :iconName="'chart-breakout-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartBreakoutSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-breakout-square'
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
