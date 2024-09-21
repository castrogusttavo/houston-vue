
<template>
  <Icon :iconName="'trade-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TradeUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trade-up'
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
