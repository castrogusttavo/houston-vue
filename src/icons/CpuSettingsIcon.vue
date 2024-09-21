
<template>
  <Icon :iconName="'cpu-settings'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CpuSettingsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cpu-settings'
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
