
<template>
  <Icon :iconName="'square-lock-password'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareLockPasswordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-lock-password'
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
