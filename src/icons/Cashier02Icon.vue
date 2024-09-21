
<template>
  <Icon :iconName="'cashier-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cashier02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cashier-02'
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
