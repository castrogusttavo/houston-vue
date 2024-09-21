
<template>
  <Icon :iconName="'chart-ring'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartRingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-ring'
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
