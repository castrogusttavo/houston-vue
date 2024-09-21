
<template>
  <Icon :iconName="'usb-connected-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbConnected03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-connected-03'
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
