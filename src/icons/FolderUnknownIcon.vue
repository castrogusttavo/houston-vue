
<template>
  <Icon :iconName="'folder-unknown'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderUnknownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-unknown'
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
