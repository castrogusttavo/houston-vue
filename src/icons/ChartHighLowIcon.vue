
<template>
  <Icon :iconName="'chart-high-low'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartHighLowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-high-low'
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
