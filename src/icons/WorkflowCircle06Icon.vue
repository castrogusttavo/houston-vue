
<template>
  <Icon :iconName="'workflow-circle-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowCircle06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-circle-06'
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
