
<template>
  <Icon :iconName="'battery-low'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteryLowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'battery-low'
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
