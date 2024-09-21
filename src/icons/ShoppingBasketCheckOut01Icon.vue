
<template>
  <Icon :iconName="'shopping-basket-check-out-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasketCheckOut01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-check-out-01'
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
