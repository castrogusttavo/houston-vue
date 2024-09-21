
<template>
  <Icon :iconName="'money-receive-flow-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyReceiveFlow02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-receive-flow-02'
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
