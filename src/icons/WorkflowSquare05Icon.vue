
<template>
  <Icon :iconName="'workflow-square-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-05'
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
