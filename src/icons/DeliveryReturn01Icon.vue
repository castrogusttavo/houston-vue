
<template>
  <Icon :iconName="'delivery-return-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryReturn01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-return-01'
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
