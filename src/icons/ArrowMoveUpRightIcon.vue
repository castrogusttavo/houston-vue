
<template>
  <Icon :iconName="'arrow-move-up-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowMoveUpRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-move-up-right'
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
