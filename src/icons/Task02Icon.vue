
<template>
  <Icon :iconName="'task-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Task02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-02'
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
