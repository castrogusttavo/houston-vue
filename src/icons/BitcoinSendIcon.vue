
<template>
  <Icon :iconName="'bitcoin-send'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinSendIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-send'
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
