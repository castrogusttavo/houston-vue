
<template>
  <Icon :iconName="'delivery-secure-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliverySecure02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-secure-02'
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
