
<template>
  <Icon :iconName="'message-question'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageQuestionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-question'
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
