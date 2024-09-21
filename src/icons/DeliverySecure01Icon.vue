
<template>
  <Icon :iconName="'delivery-secure-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliverySecure01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-secure-01'
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
