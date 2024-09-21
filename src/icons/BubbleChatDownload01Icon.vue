
<template>
  <Icon :iconName="'bubble-chat-download-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatDownload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-download-01'
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
