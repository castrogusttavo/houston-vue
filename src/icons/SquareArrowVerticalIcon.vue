
<template>
  <Icon :iconName="'square-arrow-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-vertical'
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
