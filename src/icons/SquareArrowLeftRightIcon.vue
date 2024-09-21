
<template>
  <Icon :iconName="'square-arrow-left-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowLeftRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-left-right'
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
