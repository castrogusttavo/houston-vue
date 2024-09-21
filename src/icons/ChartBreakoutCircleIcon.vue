
<template>
  <Icon :iconName="'chart-breakout-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartBreakoutCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-breakout-circle'
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
