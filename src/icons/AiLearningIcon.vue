
<template>
  <Icon :iconName="'ai-learning'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiLearningIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-learning'
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
