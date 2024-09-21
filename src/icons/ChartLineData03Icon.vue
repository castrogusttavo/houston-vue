
<template>
  <Icon :iconName="'chart-line-data-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartLineData03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-line-data-03'
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
