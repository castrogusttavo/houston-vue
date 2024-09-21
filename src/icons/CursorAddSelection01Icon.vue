
<template>
  <Icon :iconName="'cursor-add-selection-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorAddSelection01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-add-selection-01'
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
