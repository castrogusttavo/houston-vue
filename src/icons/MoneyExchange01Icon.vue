
<template>
  <Icon :iconName="'money-exchange-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyExchange01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-exchange-01'
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
