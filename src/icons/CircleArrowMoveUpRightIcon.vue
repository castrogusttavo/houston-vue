
<template>
  <Icon :iconName="'circle-arrow-move-up-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowMoveUpRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-move-up-right'
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
