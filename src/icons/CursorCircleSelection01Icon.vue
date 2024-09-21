
<template>
  <Icon :iconName="'cursor-circle-selection-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorCircleSelection01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-circle-selection-01'
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
