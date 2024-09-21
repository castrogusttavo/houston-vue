
<template>
  <Icon :iconName="'square-arrow-diagonal-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDiagonal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-diagonal-02'
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
