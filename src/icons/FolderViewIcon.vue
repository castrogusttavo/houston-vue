
<template>
  <Icon :iconName="'folder-view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-view'
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
