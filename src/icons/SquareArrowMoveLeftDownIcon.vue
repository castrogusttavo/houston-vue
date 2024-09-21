
<template>
  <Icon :iconName="'square-arrow-move-left-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowMoveLeftDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-move-left-down'
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
