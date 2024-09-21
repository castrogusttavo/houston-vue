
<template>
  <Icon :iconName="'quiz-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Quiz02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quiz-02'
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
