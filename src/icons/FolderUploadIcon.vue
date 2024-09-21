
<template>
  <Icon :iconName="'folder-upload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderUploadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-upload'
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
