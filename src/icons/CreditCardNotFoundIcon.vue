
<template>
  <Icon :iconName="'credit-card-not-found'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardNotFoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-not-found'
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
