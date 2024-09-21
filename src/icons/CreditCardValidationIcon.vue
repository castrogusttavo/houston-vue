
<template>
  <Icon :iconName="'credit-card-validation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardValidationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-validation'
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
