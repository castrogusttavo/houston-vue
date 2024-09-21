
<template>
  <Icon :iconName="'folder-export'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderExportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-export'
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
