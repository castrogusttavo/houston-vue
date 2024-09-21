
<template>
  <Icon :iconName="'password-validation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PasswordValidationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'password-validation'
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
