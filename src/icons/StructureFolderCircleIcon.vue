
<template>
  <Icon :iconName="'structure-folder-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StructureFolderCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-folder-circle'
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
