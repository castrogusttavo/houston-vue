
<template>
  <Icon :iconName="'bitcoin-lock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinLockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-lock'
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
