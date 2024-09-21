
<template>
  <Icon :iconName="'bubble-chat-delay'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatDelayIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-delay'
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
