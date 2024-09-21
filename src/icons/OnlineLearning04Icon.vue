
<template>
  <Icon :iconName="'online-learning-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OnlineLearning04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'online-learning-04'
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
