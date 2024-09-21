
<template>
  <Icon :iconName="'tablet-connected-usb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TabletConnectedUsbIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tablet-connected-usb'
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
