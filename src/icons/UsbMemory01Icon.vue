
<template>
  <Icon :iconName="'usb-memory-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbMemory01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-memory-01'
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
