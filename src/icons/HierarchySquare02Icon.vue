
<template>
  <Icon :iconName="'hierarchy-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchySquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-square-02'
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
