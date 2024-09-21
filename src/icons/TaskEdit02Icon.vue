
<template>
  <Icon :iconName="'task-edit-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaskEdit02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-edit-02'
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
