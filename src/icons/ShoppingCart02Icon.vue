
<template>
  <Icon :iconName="'shopping-cart-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingCart02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-cart-02'
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
