
<template>
  <Icon :iconName="'folder-open'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderOpenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-open'
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
