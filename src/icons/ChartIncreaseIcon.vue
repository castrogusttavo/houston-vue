
<template>
  <Icon :iconName="'chart-increase'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartIncreaseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-increase'
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
