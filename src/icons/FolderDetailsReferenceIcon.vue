
<template>
  <Icon :iconName="'folder-details-reference'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderDetailsReferenceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-details-reference'
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
