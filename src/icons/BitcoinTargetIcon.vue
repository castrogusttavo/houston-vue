
<template>
  <Icon :iconName="'bitcoin-target'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinTargetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-target'
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
