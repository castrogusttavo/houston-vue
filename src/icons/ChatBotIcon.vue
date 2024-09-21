
<template>
  <Icon :iconName="'chat-bot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChatBotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chat-bot'
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
