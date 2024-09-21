
<template>
  <Icon :iconName="'software-uninstall'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoftwareUninstallIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'software-uninstall'
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
