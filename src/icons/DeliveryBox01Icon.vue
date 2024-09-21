
<template>
  <Icon :iconName="'delivery-box-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveryBox01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-box-01'
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
