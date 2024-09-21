
<template>
  <Icon :iconName="'cursor-rectangle-selection-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorRectangleSelection01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-rectangle-selection-01'
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
