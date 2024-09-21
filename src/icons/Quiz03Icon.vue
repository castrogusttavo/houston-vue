
<template>
  <Icon :iconName="'quiz-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Quiz03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quiz-03'
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
