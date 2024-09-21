
<template>
  <Icon :iconName="'square-arrow-move-down-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowMoveDownRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-move-down-right'
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
