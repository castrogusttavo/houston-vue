
<template>
  <Icon :iconName="'shield-blockchain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShieldBlockchainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shield-blockchain'
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
