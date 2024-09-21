
<template>
  <Icon :iconName="'camera-night-mode-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraNightMode02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-night-mode-02'
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
