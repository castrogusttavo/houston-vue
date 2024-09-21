
<template>
  <Icon :iconName="'discount-tag-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiscountTag01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'discount-tag-01'
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
