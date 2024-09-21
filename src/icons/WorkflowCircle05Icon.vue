
<template>
  <Icon :iconName="'workflow-circle-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowCircle05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-circle-05'
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
