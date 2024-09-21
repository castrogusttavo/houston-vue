
<template>
  <Icon :iconName="'bubble-chat-download-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatDownload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-download-02'
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
