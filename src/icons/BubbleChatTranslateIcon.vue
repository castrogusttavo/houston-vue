
<template>
  <Icon :iconName="'bubble-chat-translate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatTranslateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-translate'
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
