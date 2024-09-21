
<template>
  <Icon :iconName="'wallet-not-found-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WalletNotFound01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-not-found-01'
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
