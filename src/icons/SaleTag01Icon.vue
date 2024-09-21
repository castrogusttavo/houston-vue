
<template>
  <Icon :iconName="'sale-tag-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaleTag01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sale-tag-01'
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
