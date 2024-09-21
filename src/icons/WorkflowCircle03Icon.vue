
<template>
  <Icon :iconName="'workflow-circle-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowCircle03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-circle-03'
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
