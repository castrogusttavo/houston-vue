
<template>
  <Icon :iconName="'credit-card-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CreditCardAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'credit-card-add'
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
