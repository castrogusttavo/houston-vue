
<template>
  <Icon :iconName="'battery-eco-charging'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteryEcoChargingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'battery-eco-charging'
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
