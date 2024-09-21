
<template>
  <Icon :iconName="'login-method'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoginMethodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'login-method'
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
