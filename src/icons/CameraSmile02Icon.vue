
<template>
  <Icon :iconName="'camera-smile-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraSmile02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-smile-02'
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
