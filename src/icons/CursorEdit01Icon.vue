
<template>
  <Icon :iconName="'cursor-edit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorEdit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-edit-01'
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
