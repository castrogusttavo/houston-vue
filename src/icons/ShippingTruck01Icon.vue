
<template>
  <Icon :iconName="'shipping-truck-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShippingTruck01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shipping-truck-01'
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
