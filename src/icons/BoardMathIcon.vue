
<template>
  <Icon :iconName="'board-math'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BoardMathIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'board-math'
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
