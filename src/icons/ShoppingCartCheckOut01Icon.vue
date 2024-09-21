
<template>
  <Icon :iconName="'shopping-cart-check-out-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingCartCheckOut01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-cart-check-out-01'
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
