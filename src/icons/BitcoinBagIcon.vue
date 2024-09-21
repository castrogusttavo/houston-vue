
<template>
  <Icon :iconName="'bitcoin-bag'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinBagIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-bag'
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
