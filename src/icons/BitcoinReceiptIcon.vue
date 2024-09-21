
<template>
  <Icon :iconName="'bitcoin-receipt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinReceiptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-receipt'
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
