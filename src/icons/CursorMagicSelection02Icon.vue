
<template>
  <Icon :iconName="'cursor-magic-selection-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorMagicSelection02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-magic-selection-02'
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
