
<template>
  <Icon :iconName="'workflow-square-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-07'
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
