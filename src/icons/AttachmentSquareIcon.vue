
<template>
  <Icon :iconName="'attachment-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AttachmentSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'attachment-square'
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
