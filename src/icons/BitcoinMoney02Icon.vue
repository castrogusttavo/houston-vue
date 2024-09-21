
<template>
  <Icon :iconName="'bitcoin-money-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinMoney02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-money-02'
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
