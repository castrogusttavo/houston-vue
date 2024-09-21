
<template>
  <Icon :iconName="'square-arrow-up-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowUpDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-up-down'
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
