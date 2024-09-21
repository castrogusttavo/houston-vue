
<template>
  <Icon :iconName="'shopping-bag-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBagRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-bag-remove'
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
