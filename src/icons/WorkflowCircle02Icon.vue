
<template>
  <Icon :iconName="'workflow-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-circle-02'
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
