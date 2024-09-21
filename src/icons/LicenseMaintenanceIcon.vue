
<template>
  <Icon :iconName="'license-maintenance'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LicenseMaintenanceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'license-maintenance'
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
