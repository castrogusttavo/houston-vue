
<template>
  <Icon :iconName="'wallet-done-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WalletDone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-done-01'
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
