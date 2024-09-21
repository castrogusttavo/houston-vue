
<template>
  <Icon :iconName="'workflow-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-circle-01'
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
