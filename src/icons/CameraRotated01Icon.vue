
<template>
  <Icon :iconName="'camera-rotated-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraRotated01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-rotated-01'
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
