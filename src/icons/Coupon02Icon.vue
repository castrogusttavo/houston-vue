
<template>
  <Icon :iconName="'coupon-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Coupon02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coupon-02'
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
