
<template>
  <Icon :iconName="'task-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaskRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-remove-02'
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
