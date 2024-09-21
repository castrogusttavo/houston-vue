
<template>
  <Icon :iconName="'shopping-bag-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShoppingBagAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shopping-bag-add'
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
