
<template>
  <Icon :iconName="'bitcoin-location'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinLocationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-location'
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
