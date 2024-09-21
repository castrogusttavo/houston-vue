
<template>
  <Icon :iconName="'square-lock-check-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareLockCheck02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-lock-check-02'
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
