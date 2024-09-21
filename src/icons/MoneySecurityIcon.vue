
<template>
  <Icon :iconName="'money-security'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneySecurityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-security'
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
