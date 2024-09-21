
<template>
  <Icon :iconName="'chat-gpt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChatGptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chat-gpt'
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
