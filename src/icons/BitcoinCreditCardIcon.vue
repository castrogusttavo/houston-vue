
<template>
  <Icon :iconName="'bitcoin-credit-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinCreditCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-credit-card'
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
