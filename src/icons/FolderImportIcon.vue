
<template>
  <Icon :iconName="'folder-import'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderImportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-import'
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
