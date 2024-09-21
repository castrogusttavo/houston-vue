
<template>
  <Icon :iconName="'bubble-chat-notification'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatNotificationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-notification'
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
