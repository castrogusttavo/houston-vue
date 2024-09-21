
<template>
  <Icon :iconName="'credit-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card'
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
