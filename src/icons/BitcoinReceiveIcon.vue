
<template>
  <Icon :iconName="'bitcoin-receive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinReceiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-receive'
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
