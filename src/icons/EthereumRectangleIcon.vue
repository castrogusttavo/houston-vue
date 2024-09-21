
<template>
  <Icon :iconName="'ethereum-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EthereumRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ethereum-rectangle'
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
