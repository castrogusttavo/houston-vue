
<template>
  <Icon :iconName="'camera-video'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraVideoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-video'
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
