
<template>
  <Icon :iconName="'quiz-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Quiz01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quiz-01'
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
