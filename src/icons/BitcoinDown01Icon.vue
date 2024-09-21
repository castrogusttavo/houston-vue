
<template>
  <Icon :iconName="'bitcoin-down-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinDown01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-down-01'
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
