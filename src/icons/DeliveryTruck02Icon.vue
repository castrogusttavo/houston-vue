
<template>
  <Icon :iconName="'delivery-truck-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryTruck02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-truck-02'
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
