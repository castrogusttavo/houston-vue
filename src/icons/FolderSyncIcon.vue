
<template>
  <Icon :iconName="'folder-sync'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderSyncIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-sync'
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
