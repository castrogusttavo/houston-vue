
<template>
  <Icon :iconName="'structure-folder'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StructureFolderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-folder'
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
