
<template>
  <Icon :iconName="'square-arrow-shrink-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowShrink02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-shrink-02'
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
