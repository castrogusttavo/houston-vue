
<template>
  <Icon :iconName="'license-pin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LicensePinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'license-pin'
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
