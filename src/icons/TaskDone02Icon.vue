
<template>
  <Icon :iconName="'task-done-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaskDone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-done-02'
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
