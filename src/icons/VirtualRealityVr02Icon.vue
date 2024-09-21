
<template>
  <Icon :iconName="'virtual-reality-vr-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VirtualRealityVr02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'virtual-reality-vr-02'
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
