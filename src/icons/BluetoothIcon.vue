
<template>
  <Icon :iconName="'bluetooth'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BluetoothIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bluetooth'
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
