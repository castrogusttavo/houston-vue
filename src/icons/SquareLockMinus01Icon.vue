
<template>
  <Icon :iconName="'square-lock-minus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareLockMinus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-lock-minus-01'
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
