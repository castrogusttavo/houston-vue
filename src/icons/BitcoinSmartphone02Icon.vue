
<template>
  <Icon :iconName="'bitcoin-smartphone-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinSmartphone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-smartphone-02'
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
