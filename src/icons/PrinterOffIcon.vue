
<template>
  <Icon :iconName="'printer-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrinterOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'printer-off'
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
