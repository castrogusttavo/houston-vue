
<template>
  <Icon :iconName="'folder-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-off'
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
