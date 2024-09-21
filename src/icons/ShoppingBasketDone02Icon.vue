
<template>
  <Icon :iconName="'shopping-basket-done-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketDone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-done-02'
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
