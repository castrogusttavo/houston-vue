
<template>
  <Icon :iconName="'chart-line-data-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartLineData01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-line-data-01'
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
