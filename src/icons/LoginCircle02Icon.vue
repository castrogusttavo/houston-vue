
<template>
  <Icon :iconName="'login-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoginCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'login-circle-02'
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
