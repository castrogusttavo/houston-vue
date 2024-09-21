
<template>
  <Icon :iconName="'square-arrow-down-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDownLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-down-left'
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
