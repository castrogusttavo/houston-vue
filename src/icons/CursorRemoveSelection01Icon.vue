
<template>
  <Icon :iconName="'cursor-remove-selection-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorRemoveSelection01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-remove-selection-01'
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
