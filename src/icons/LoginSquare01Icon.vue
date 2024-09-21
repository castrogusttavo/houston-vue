
<template>
  <Icon :iconName="'login-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoginSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'login-square-01'
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
