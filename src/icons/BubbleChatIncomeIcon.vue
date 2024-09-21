
<template>
  <Icon :iconName="'bubble-chat-income'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatIncomeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat-income'
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
