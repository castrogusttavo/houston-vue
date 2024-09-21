
<template>
  <Icon :iconName="'more-vertical-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreVerticalSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-vertical-square-02'
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
