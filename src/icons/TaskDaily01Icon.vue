
<template>
  <Icon :iconName="'task-daily-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaskDaily01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'task-daily-01'
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
