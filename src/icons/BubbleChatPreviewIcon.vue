
<template>
  <Icon :iconName="'bubble-chat-preview'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatPreviewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-preview'
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
