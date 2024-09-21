
<template>
  <Icon :iconName="'square-arrow-up-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowUpRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-up-right'
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
