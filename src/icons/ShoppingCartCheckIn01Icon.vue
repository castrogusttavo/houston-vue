
<template>
  <Icon :iconName="'shopping-cart-check-in-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingCartCheckIn01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-cart-check-in-01'
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
