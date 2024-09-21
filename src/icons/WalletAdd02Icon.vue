
<template>
  <Icon :iconName="'wallet-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WalletAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-add-02'
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
