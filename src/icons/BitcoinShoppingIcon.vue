
<template>
  <Icon :iconName="'bitcoin-shopping'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinShoppingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-shopping'
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
