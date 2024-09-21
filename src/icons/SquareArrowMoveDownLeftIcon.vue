
<template>
  <Icon :iconName="'square-arrow-move-down-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowMoveDownLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-move-down-left'
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
