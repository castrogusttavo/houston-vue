
<template>
  <Icon :iconName="'login-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoginSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'login-square-02'
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
