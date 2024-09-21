
<template>
  <Icon :iconName="'credit-card-freeze'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardFreezeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-freeze'
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
