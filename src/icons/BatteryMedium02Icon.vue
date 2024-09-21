
<template>
  <Icon :iconName="'battery-medium-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteryMedium02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'battery-medium-02'
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
