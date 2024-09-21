
<template>
  <Icon :iconName="'chart-bubble-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartBubble02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-bubble-02'
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
