
<template>
  <Icon :iconName="'workflow-square-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-08'
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
