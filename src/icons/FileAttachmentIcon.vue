
<template>
  <Icon :iconName="'file-attachment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileAttachmentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-attachment'
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
