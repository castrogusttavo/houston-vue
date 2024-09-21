
<template>
  <Icon :iconName="'cursor-progress-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorProgress01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-progress-01'
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
