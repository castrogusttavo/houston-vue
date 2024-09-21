
<template>
  <Icon :iconName="'bubble-chat-user'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatUserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-user'
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
