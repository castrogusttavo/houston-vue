
<template>
  <Icon :iconName="'folder-unlocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderUnlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-unlocked'
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
