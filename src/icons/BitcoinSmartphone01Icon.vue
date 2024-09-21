
<template>
  <Icon :iconName="'bitcoin-smartphone-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinSmartphone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-smartphone-01'
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
