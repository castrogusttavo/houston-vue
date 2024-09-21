
<template>
  <Icon :iconName="'conversation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ConversationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'conversation'
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
