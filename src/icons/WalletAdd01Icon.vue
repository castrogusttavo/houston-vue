
<template>
  <Icon :iconName="'wallet-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WalletAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-add-01'
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
