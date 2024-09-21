
<template>
  <Icon :iconName="'cellular-network'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CellularNetworkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cellular-network'
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
