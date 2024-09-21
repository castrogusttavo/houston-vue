
<template>
  <Icon :iconName="'finger-print'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FingerPrintIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'finger-print'
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
