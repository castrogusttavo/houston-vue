
<template>
  <Icon :iconName="'bluetooth-not-connected'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BluetoothNotConnectedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bluetooth-not-connected'
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
