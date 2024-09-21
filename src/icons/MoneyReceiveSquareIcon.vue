
<template>
  <Icon :iconName="'money-receive-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyReceiveSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-receive-square'
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
