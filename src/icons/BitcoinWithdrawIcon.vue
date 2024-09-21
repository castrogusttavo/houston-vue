
<template>
  <Icon :iconName="'bitcoin-withdraw'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinWithdrawIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-withdraw'
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
