
<template>
  <Icon :iconName="'square-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-square'
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
