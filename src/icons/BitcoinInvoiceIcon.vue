
<template>
  <Icon :iconName="'bitcoin-invoice'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinInvoiceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-invoice'
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
