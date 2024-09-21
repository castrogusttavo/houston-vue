
<template>
  <Icon :iconName="'folder-audio'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderAudioIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-audio'
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
