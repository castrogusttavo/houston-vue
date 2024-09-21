
<template>
  <Icon :iconName="'usb-connected-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbConnected02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-connected-02'
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
