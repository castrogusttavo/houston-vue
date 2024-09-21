
<template>
  <Icon :iconName="'finger-print-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FingerPrintRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'finger-print-remove'
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
