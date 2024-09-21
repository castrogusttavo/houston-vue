
<template>
  <Icon :iconName="'money-send-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneySendSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-send-square'
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
