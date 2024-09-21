
<template>
  <Icon :iconName="'lasso-tool-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LassoTool01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lasso-tool-01'
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
