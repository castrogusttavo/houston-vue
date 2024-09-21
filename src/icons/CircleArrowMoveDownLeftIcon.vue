
<template>
  <Icon :iconName="'circle-arrow-move-down-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowMoveDownLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-move-down-left'
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
