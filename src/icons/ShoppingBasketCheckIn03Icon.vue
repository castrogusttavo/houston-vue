
<template>
  <Icon :iconName="'shopping-basket-check-in-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketCheckIn03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-check-in-03'
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
