
<template>
  <Icon :iconName="'bubble-chat-question'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatQuestionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-question'
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
