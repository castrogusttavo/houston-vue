
<template>
  <Icon :iconName="'bitcoin-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-circle'
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
