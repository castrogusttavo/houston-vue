
<template>
  <Icon :iconName="'folder-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-remove'
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
