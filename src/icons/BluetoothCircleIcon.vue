
<template>
  <Icon :iconName="'bluetooth-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BluetoothCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bluetooth-circle'
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
