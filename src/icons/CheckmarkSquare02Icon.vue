
<template>
  <Icon :iconName="'checkmark-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-square-02'
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
