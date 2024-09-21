
<template>
  <Icon :iconName="'hierarchy-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchySquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-square-01'
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
