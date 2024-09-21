
<template>
  <Icon :iconName="'bitcoin-up-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinUp01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-up-01'
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
