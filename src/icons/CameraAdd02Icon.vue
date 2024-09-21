
<template>
  <Icon :iconName="'camera-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-add-02'
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
