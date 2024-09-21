
<template>
  <Icon :iconName="'shipping-center'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShippingCenterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shipping-center'
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
