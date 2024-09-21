
<template>
  <Icon :iconName="'bitcoin-eye'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinEyeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-eye'
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
