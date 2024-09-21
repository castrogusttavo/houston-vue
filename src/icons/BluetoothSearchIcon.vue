
<template>
  <Icon :iconName="'bluetooth-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BluetoothSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bluetooth-search'
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
