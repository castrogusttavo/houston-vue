
<template>
  <Icon :iconName="'usb-memory-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbMemory02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-memory-02'
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
