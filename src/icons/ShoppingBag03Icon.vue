
<template>
  <Icon :iconName="'shopping-bag-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBag03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-bag-03'
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
