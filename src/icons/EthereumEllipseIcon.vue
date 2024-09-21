
<template>
  <Icon :iconName="'ethereum-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EthereumEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ethereum-ellipse'
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
