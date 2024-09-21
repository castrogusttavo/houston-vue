
<template>
  <Icon :iconName="'chart-scatter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartScatterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-scatter'
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
