
<template>
  <Icon :iconName="'shopping-basket-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-add-02'
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
