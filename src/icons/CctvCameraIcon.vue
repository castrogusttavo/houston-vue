
<template>
  <Icon :iconName="'cctv-camera'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CctvCameraIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cctv-camera'
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
