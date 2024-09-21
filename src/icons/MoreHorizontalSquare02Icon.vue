
<template>
  <Icon :iconName="'more-horizontal-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreHorizontalSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-horizontal-square-02'
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
