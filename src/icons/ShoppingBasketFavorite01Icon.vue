
<template>
  <Icon :iconName="'shopping-basket-favorite-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketFavorite01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-favorite-01'
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
