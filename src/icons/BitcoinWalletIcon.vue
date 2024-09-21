
<template>
  <Icon :iconName="'bitcoin-wallet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinWalletIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-wallet'
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
