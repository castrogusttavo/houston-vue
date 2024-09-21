
<template>
  <Icon :iconName="'computer-programming-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerProgramming02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-programming-02'
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
