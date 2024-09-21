
<template>
  <Icon :iconName="'usb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UsbIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'usb'
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
