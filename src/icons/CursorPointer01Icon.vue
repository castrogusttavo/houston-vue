
<template>
  <Icon :iconName="'cursor-pointer-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorPointer01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-pointer-01'
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
