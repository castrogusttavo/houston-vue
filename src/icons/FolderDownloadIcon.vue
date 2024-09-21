
<template>
  <Icon :iconName="'folder-download'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderDownloadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-download'
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
