
<template>
  <Icon :iconName="'square-arrow-move-right-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowMoveRightDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-move-right-down'
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
