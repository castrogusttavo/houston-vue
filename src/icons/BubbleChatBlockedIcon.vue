
<template>
  <Icon :iconName="'bubble-chat-blocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatBlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-blocked'
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
