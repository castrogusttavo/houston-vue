
<template>
  <Icon :iconName="'truck-delivery'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TruckDeliveryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'truck-delivery'
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
