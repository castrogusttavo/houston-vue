
<template>
  <Icon :iconName="'file-sync'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileSyncIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-sync'
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
