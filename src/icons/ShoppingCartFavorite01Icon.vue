
<template>
  <Icon :iconName="'shopping-cart-favorite-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingCartFavorite01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-cart-favorite-01'
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
