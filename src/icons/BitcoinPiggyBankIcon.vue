
<template>
  <Icon :iconName="'bitcoin-piggy-bank'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinPiggyBankIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-piggy-bank'
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
