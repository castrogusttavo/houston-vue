
<template>
  <Icon :iconName="'chart-decrease'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartDecreaseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-decrease'
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
