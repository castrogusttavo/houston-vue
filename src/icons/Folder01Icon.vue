
<template>
  <Icon :iconName="'folder-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Folder01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'folder-01'
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
