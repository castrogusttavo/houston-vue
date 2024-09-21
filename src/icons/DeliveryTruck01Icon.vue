
<template>
  <Icon :iconName="'delivery-truck-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryTruck01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-truck-01'
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
