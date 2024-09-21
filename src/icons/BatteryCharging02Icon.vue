
<template>
  <Icon :iconName="'battery-charging-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteryCharging02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'battery-charging-02'
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
