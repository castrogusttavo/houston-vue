
<template>
  <Icon :iconName="'file-import'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileImportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-import'
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
