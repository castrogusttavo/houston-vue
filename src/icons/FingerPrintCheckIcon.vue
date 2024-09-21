
<template>
  <Icon :iconName="'finger-print-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FingerPrintCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'finger-print-check'
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
