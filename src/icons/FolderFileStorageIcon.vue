
<template>
  <Icon :iconName="'folder-file-storage'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderFileStorageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-file-storage'
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
