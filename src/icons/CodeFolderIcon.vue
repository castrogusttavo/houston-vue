
<template>
  <Icon :iconName="'code-folder'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CodeFolderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'code-folder'
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
