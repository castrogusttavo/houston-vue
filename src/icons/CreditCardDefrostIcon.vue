
<template>
  <Icon :iconName="'credit-card-defrost'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardDefrostIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-defrost'
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
