
<template>
  <Icon :iconName="'delivery-tracking-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryTracking01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-tracking-01'
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
