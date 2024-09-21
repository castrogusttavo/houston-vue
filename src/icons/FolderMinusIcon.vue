
<template>
  <Icon :iconName="'folder-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FolderMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-minus'
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
