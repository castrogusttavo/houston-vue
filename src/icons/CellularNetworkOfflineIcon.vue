
<template>
  <Icon :iconName="'cellular-network-offline'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CellularNetworkOfflineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cellular-network-offline'
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
