
<template>
  <Icon :iconName="'delivery-view-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryView01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-view-01'
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
