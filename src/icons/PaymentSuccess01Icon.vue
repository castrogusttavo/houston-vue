
<template>
  <Icon :iconName="'payment-success-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaymentSuccess01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'payment-success-01'
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
