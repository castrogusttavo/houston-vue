
<template>
  <Icon :iconName="'folder-video'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderVideoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-video'
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
