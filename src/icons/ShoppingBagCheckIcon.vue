
<template>
  <Icon :iconName="'shopping-bag-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBagCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-bag-check'
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
