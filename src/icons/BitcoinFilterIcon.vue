
<template>
  <Icon :iconName="'bitcoin-filter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinFilterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-filter'
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
