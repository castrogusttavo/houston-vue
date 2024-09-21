
<template>
  <Icon :iconName="'bubble-chat-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-edit'
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
