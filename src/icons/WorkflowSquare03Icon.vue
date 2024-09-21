
<template>
  <Icon :iconName="'workflow-square-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-03'
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
