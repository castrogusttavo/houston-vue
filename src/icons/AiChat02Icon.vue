
<template>
  <Icon :iconName="'ai-chat-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiChat02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-chat-02'
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
