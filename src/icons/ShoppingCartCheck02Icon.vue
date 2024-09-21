
<template>
  <Icon :iconName="'shopping-cart-check-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingCartCheck02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-cart-check-02'
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
