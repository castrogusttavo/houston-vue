
<template>
  <Icon :iconName="'paint-board'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaintBoardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paint-board'
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
