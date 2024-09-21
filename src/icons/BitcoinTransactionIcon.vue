
<template>
  <Icon :iconName="'bitcoin-transaction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinTransactionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-transaction'
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
