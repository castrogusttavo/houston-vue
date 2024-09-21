
<template>
  <Icon :iconName="'usb-not-connected-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbNotConnected02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-not-connected-02'
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
