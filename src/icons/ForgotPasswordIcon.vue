
<template>
  <Icon :iconName="'forgot-password'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ForgotPasswordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'forgot-password'
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
