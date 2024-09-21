
<template>
  <Icon :iconName="'folder-locked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderLockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-locked'
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
