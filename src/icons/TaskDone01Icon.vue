
<template>
  <Icon :iconName="'task-done-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaskDone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-done-01'
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
