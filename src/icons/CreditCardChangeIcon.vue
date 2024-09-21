
<template>
  <Icon :iconName="'credit-card-change'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardChangeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-change'
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
