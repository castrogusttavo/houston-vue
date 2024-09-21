
<template>
  <Icon :iconName="'arrow-move-right-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowMoveRightDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-move-right-down'
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
