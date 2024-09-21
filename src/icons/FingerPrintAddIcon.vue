
<template>
  <Icon :iconName="'finger-print-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FingerPrintAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'finger-print-add'
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
