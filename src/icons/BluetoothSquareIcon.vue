
<template>
  <Icon :iconName="'bluetooth-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BluetoothSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bluetooth-square'
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
