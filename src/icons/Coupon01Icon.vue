
<template>
  <Icon :iconName="'coupon-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Coupon01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coupon-01'
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
