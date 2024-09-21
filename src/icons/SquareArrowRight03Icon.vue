
<template>
  <Icon :iconName="'square-arrow-right-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowRight03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-right-03'
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
