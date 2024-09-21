
<template>
  <Icon :iconName="'bubble-chat-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-add'
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
