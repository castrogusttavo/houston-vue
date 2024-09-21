
<template>
  <Icon :iconName="'circle-arrow-move-right-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowMoveRightDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-move-right-down'
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
