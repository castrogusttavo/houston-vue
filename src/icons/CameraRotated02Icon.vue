
<template>
  <Icon :iconName="'camera-rotated-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraRotated02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-rotated-02'
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
