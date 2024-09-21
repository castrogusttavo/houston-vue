
<template>
  <Icon :iconName="'arrow-move-down-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowMoveDownRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-move-down-right'
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
