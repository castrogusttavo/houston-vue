
<template>
  <Icon :iconName="'tetris'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TetrisIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tetris'
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
