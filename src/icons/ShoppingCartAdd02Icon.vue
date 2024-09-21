
<template>
  <Icon :iconName="'shopping-cart-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingCartAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-cart-add-02'
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
