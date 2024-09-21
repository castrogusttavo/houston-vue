
<template>
  <Icon :iconName="'square-lock-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareLockRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-lock-remove-02'
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
