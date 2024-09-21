
<template>
  <Icon :iconName="'strategy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StrategyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'strategy'
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
