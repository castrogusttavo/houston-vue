
<template>
  <Icon :iconName="'square-arrow-diagonal-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDiagonal01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-diagonal-01'
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
