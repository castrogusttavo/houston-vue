
<template>
  <Icon :iconName="'tablet-connected-bluetooth'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TabletConnectedBluetoothIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tablet-connected-bluetooth'
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
