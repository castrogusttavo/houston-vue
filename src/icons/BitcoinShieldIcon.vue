
<template>
  <Icon :iconName="'bitcoin-shield'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinShieldIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-shield'
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
