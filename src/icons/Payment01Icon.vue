
<template>
  <Icon :iconName="'payment-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Payment01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'payment-01'
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
