
<template>
  <Icon :iconName="'folder-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Folder02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-02'
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
