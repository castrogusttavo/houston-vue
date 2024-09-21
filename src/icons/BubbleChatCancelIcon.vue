
<template>
  <Icon :iconName="'bubble-chat-cancel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatCancelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-cancel'
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
