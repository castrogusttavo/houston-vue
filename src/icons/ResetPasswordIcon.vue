
<template>
  <Icon :iconName="'reset-password'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ResetPasswordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'reset-password'
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
