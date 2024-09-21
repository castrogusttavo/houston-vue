
<template>
  <Icon :iconName="'shipping-loading'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShippingLoadingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shipping-loading'
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
