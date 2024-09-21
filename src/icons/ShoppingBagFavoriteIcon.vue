
<template>
  <Icon :iconName="'shopping-bag-favorite'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBagFavoriteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-bag-favorite'
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
