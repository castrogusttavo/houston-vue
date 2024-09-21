
<template>
  <Icon :iconName="'login-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Login02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'login-02'
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
