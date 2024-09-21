
<template>
  <Icon :iconName="'money-exchange-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyExchange02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-exchange-02'
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
