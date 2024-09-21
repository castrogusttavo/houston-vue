
<template>
  <Icon :iconName="'shopping-basket-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-remove-02'
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
