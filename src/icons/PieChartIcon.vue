
<template>
  <Icon :iconName="'pie-chart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PieChartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pie-chart'
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
