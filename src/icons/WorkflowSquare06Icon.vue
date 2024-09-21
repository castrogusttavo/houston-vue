
<template>
  <Icon :iconName="'workflow-square-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-06'
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
