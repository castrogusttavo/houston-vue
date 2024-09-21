
<template>
  <Icon :iconName="'hierarchy-circle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchyCircle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-circle-01'
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
