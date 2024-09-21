
<template>
  <Icon :iconName="'chart-average'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartAverageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-average'
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
