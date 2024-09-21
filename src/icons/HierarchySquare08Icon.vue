
<template>
  <Icon :iconName="'hierarchy-square-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchySquare08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-square-08'
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
