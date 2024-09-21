
<template>
  <Icon :iconName="'money-send-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneySendCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-send-circle'
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
