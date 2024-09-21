
<template>
  <Icon :iconName="'tic-tac-toe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TicTacToeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tic-tac-toe'
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
