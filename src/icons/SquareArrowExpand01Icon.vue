
<template>
  <Icon :iconName="'square-arrow-expand-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowExpand01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-expand-01'
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
