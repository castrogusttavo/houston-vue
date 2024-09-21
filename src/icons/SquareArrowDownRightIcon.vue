
<template>
  <Icon :iconName="'square-arrow-down-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDownRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-down-right'
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
