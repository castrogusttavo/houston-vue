
<template>
  <Icon :iconName="'hierarchy-square-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchySquare05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-square-05'
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
