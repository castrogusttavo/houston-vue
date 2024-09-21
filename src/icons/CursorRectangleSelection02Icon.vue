
<template>
  <Icon :iconName="'cursor-rectangle-selection-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorRectangleSelection02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-rectangle-selection-02'
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
