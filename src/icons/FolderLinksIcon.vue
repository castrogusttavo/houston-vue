
<template>
  <Icon :iconName="'folder-links'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderLinksIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-links'
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
