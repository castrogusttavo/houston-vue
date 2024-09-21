
<template>
  <Icon :iconName="'customer-service-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CustomerService01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'customer-service-01'
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
