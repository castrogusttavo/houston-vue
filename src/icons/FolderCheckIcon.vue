
<template>
  <Icon :iconName="'folder-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-check'
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
