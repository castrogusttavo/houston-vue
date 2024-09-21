
<template>
  <Icon :iconName="'product-loading'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ProductLoadingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'product-loading'
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
