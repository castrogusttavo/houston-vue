
<template>
  <Icon :iconName="'square-arrow-move-right-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowMoveRightUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-move-right-up'
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
