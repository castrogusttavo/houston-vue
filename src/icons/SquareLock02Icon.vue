
<template>
  <Icon :iconName="'square-lock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareLock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-lock-02'
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
