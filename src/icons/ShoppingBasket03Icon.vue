
<template>
  <Icon :iconName="'shopping-basket-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasket03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-03'
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
