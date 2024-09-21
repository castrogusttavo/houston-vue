
<template>
  <Icon :iconName="'folder-security'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderSecurityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-security'
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
