
<template>
  <Icon :iconName="'ethereum'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EthereumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ethereum'
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
