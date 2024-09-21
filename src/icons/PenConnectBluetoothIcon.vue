
<template>
  <Icon :iconName="'pen-connect-bluetooth'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenConnectBluetoothIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-connect-bluetooth'
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
