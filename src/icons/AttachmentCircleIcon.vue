
<template>
  <Icon :iconName="'attachment-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AttachmentCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'attachment-circle'
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
