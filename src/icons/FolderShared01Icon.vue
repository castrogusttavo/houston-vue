
<template>
  <Icon :iconName="'folder-shared-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderShared01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-shared-01'
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
