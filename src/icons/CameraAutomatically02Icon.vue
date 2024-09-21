
<template>
  <Icon :iconName="'camera-automatically-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraAutomatically02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-automatically-02'
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
