
<template>
  <Icon :iconName="'trade-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TradeDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trade-down'
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
