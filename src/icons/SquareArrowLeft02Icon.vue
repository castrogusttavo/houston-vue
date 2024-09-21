
<template>
  <Icon :iconName="'square-arrow-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-left-02'
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
