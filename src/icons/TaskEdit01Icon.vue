
<template>
  <Icon :iconName="'task-edit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaskEdit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-edit-01'
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
