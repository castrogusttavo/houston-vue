
<template>
  <Icon :iconName="'circle-arrow-move-left-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowMoveLeftDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-move-left-down'
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
