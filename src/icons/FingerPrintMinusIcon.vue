
<template>
  <Icon :iconName="'finger-print-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FingerPrintMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'finger-print-minus'
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
