
<template>
  <Icon :iconName="'cursor-circle-selection-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorCircleSelection02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-circle-selection-02'
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
