
<template>
  <Icon :iconName="'folder-shared-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderShared02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-shared-02'
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
