
<template>
  <Icon :iconName="'biometric-device'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BiometricDeviceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'biometric-device'
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
