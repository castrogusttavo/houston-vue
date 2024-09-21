
<template>
  <Icon :iconName="'sms-code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmsCodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sms-code'
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
