
<template>
  <Icon :iconName="'bubble-chat-secure'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatSecureIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-secure'
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
