
<template>
  <Icon :iconName="'credit-card-accept'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardAcceptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-accept'
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
