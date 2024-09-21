
<template>
  <Icon :iconName="'folder-attachment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderAttachmentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-attachment'
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
