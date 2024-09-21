
<template>
  <Icon :iconName="'square-arrow-down-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDown03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-down-03'
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
