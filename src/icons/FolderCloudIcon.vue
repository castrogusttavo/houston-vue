
<template>
  <Icon :iconName="'folder-cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderCloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-cloud'
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
