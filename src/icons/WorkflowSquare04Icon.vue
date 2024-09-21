
<template>
  <Icon :iconName="'workflow-square-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkflowSquare04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'workflow-square-04'
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
