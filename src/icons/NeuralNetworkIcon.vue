
<template>
  <Icon :iconName="'neural-network'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NeuralNetworkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'neural-network'
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
