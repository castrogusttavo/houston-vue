
<template>
  <Icon :iconName="'bitcoin-down-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinDown02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-down-02'
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
