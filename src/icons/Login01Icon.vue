
<template>
  <Icon :iconName="'login-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Login01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'login-01'
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
