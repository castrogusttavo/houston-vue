
<template>
  <Icon :iconName="'square-arrow-left-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowLeft03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-left-03'
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
