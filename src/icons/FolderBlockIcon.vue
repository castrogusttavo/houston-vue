
<template>
  <Icon :iconName="'folder-block'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderBlockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-block'
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
