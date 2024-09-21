
<template>
  <Icon :iconName="'usb-bugs'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbBugsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb-bugs'
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
