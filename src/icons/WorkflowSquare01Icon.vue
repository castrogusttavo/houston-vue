
<template>
  <Icon :iconName="'workflow-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-01'
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
