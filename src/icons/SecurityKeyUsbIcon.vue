
<template>
  <Icon :iconName="'security-key-usb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityKeyUsbIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security-key-usb'
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
