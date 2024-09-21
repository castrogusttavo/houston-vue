
<template>
  <Icon :iconName="'folder-library'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderLibraryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-library'
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
