
<template>
  <Icon :iconName="'hierarchy-square-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchySquare06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-square-06'
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
