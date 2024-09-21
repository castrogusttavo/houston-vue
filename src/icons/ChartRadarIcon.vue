
<template>
  <Icon :iconName="'chart-radar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartRadarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-radar'
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
