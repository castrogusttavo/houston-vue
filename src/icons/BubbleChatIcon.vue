
<template>
  <Icon :iconName="'bubble-chat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleChatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-chat'
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
