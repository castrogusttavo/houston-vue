
<template>
  <Icon :iconName="'cursor-remove-selection-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorRemoveSelection02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-remove-selection-02'
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
