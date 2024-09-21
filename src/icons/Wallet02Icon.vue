
<template>
  <Icon :iconName="'wallet-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wallet02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-02'
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
