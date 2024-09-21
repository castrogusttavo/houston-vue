
<template>
  <Icon :iconName="'money-receive-flow-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyReceiveFlow01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-receive-flow-01'
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
