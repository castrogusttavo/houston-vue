
<template>
  <Icon :iconName="'shopping-bag-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBag01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-bag-01'
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
