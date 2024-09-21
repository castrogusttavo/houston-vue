
<template>
  <Icon :iconName="'bubble-chat-outcome'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatOutcomeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-outcome'
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
