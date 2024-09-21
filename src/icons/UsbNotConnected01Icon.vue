
<template>
  <Icon :iconName="'usb-not-connected-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbNotConnected01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-not-connected-01'
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
