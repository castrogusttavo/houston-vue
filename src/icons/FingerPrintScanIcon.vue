
<template>
  <Icon :iconName="'finger-print-scan'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FingerPrintScanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'finger-print-scan'
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
