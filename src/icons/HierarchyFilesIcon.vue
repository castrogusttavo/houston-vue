
<template>
  <Icon :iconName="'hierarchy-files'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HierarchyFilesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hierarchy-files'
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
