
<template>
  <Icon :iconName="'shopping-basket-done-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketDone03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-done-03'
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
