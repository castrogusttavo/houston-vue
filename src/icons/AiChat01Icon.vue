
<template>
  <Icon :iconName="'ai-chat-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiChat01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-chat-01'
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
