
<template>
  <Icon :iconName="'wallet-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wallet01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wallet-01'
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
