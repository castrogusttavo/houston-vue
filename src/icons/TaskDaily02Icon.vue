
<template>
  <Icon :iconName="'task-daily-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaskDaily02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-daily-02'
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
