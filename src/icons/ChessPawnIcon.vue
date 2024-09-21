
<template>
  <Icon :iconName="'chess-pawn'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChessPawnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chess-pawn'
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
