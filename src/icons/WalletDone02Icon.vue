
<template>
  <Icon :iconName="'wallet-done-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WalletDone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-done-02'
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
