
<template>
  <Icon :iconName="'delivery-delay-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryDelay01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-delay-01'
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
