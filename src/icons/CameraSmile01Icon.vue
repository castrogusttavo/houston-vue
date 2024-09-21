
<template>
  <Icon :iconName="'camera-smile-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraSmile01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-smile-01'
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
