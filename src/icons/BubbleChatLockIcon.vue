
<template>
  <Icon :iconName="'bubble-chat-lock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatLockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-lock'
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
