
<template>
  <Icon :iconName="'shopping-basket-remove-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketRemove03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-remove-03'
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
