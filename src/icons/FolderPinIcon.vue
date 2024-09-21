
<template>
  <Icon :iconName="'folder-pin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderPinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-pin'
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
