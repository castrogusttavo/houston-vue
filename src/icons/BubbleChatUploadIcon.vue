
<template>
  <Icon :iconName="'bubble-chat-upload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatUploadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-upload'
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
