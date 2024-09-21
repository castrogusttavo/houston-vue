
<template>
  <Icon :iconName="'folder-management'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderManagementIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-management'
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
