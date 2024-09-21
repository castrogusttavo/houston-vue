
<template>
  <Icon :iconName="'quiz-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Quiz05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quiz-05'
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
