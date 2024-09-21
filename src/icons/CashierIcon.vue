
<template>
  <Icon :iconName="'cashier'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CashierIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cashier'
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
