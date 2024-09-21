
<template>
  <Icon :iconName="'folder-music'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderMusicIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-music'
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
