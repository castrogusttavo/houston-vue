
<template>
  <Icon :iconName="'square-lock-minus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareLockMinus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-lock-minus-02'
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
