
<template>
  <Icon :iconName="'coins-bitcoin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CoinsBitcoinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coins-bitcoin'
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
