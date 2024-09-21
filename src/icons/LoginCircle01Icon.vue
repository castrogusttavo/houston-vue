
<template>
  <Icon :iconName="'login-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LoginCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'login-circle-01'
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
