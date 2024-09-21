
<template>
  <Icon :iconName="'task-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Task01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-01'
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
