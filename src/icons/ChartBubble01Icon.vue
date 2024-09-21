
<template>
  <Icon :iconName="'chart-bubble-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartBubble01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-bubble-01'
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
