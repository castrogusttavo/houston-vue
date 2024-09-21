
<template>
  <Icon :iconName="'shopping-basket-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBasket01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-basket-01'
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
