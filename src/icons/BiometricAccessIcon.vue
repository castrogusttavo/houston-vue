
<template>
  <Icon :iconName="'biometric-access'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BiometricAccessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'biometric-access'
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
