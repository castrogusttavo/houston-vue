
<template>
  <Icon :iconName="'battery-charging-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteryCharging01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'battery-charging-01'
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
