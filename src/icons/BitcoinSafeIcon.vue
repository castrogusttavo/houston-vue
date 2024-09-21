
<template>
  <Icon :iconName="'bitcoin-safe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinSafeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-safe'
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
