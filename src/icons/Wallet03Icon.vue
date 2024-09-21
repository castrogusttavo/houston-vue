
<template>
  <Icon :iconName="'wallet-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wallet03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-03'
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
