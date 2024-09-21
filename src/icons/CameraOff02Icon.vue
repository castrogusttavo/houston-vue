
<template>
  <Icon :iconName="'camera-off-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraOff02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-off-02'
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
