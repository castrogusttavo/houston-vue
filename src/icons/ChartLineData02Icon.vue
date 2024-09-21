
<template>
  <Icon :iconName="'chart-line-data-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartLineData02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-line-data-02'
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
