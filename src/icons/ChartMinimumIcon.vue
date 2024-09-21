
<template>
  <Icon :iconName="'chart-minimum'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartMinimumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-minimum'
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
