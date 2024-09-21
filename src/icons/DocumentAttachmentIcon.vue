
<template>
  <Icon :iconName="'document-attachment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DocumentAttachmentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'document-attachment'
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
