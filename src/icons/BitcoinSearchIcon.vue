
<template>
  <Icon :iconName="'bitcoin-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-search'
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
