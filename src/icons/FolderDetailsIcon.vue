
<template>
  <Icon :iconName="'folder-details'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderDetailsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-details'
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
