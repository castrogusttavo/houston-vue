
<template>
  <Icon :iconName="'usb-error'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbErrorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-error'
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
