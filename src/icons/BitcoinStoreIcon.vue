
<template>
  <Icon :iconName="'bitcoin-store'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinStoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-store'
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
