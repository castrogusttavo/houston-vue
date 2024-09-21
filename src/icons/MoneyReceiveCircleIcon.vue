
<template>
  <Icon :iconName="'money-receive-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyReceiveCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-receive-circle'
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
