
<template>
  <Icon :iconName="'square-root-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareRootSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-root-square'
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
