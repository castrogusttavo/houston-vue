
<template>
  <Icon :iconName="'coupon-percent'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CouponPercentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coupon-percent'
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
