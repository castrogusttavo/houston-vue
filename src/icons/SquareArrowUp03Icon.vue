
<template>
  <Icon :iconName="'square-arrow-up-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowUp03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-up-03'
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
