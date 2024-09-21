
<template>
  <Icon :iconName="'workflow-circle-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowCircle04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-circle-04'
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
