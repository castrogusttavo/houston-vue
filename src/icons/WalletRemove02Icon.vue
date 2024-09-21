
<template>
  <Icon :iconName="'wallet-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WalletRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-remove-02'
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
