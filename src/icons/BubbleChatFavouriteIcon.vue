
<template>
  <Icon :iconName="'bubble-chat-favourite'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatFavouriteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-favourite'
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
