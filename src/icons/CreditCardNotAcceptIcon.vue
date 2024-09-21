
<template>
  <Icon :iconName="'credit-card-not-accept'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardNotAcceptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-not-accept'
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
