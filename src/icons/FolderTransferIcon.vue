
<template>
  <Icon :iconName="'folder-transfer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderTransferIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-transfer'
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
