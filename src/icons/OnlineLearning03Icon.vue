
<template>
  <Icon :iconName="'online-learning-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OnlineLearning03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'online-learning-03'
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
