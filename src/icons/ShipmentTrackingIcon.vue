
<template>
  <Icon :iconName="'shipment-tracking'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShipmentTrackingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shipment-tracking'
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
