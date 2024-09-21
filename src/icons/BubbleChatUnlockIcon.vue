
<template>
  <Icon :iconName="'bubble-chat-unlock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatUnlockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-unlock'
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
