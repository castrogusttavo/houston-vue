
<template>
  <Icon :iconName="'lasso-tool-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LassoTool02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lasso-tool-02'
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
