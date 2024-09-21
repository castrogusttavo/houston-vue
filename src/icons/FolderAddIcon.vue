
<template>
  <Icon :iconName="'folder-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-add'
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
