
<template>
  <Icon :iconName="'camera-lens'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraLensIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-lens'
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
