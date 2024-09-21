
<template>
  <Icon :iconName="'folder-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-edit'
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
