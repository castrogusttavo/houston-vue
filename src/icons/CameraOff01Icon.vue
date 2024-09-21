
<template>
  <Icon :iconName="'camera-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-off-01'
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
