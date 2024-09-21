
<template>
  <Icon :iconName="'file-export'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileExportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-export'
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
