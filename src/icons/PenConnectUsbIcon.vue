
<template>
  <Icon :iconName="'pen-connect-usb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenConnectUsbIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-connect-usb'
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
