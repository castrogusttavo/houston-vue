
<template>
  <Icon :iconName="'money-receive-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyReceive01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-receive-01'
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
