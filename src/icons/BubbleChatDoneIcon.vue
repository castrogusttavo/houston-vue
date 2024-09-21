
<template>
  <Icon :iconName="'bubble-chat-done'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatDoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-done'
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
