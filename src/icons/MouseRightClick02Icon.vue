
<template>
  <Icon :iconName="'mouse-right-click-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MouseRightClick02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-right-click-02'
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
