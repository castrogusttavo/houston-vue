
<template>
  <Icon :iconName="'more-horizontal-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreHorizontalSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-horizontal-square-01'
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
