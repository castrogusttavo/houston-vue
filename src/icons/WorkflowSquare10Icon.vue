
<template>
  <Icon :iconName="'workflow-square-10'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare10Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-10'
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
