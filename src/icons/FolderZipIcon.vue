
<template>
  <Icon :iconName="'folder-zip'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderZipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-zip'
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
