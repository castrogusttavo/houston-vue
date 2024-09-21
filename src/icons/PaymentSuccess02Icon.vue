
<template>
  <Icon :iconName="'payment-success-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaymentSuccess02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'payment-success-02'
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
