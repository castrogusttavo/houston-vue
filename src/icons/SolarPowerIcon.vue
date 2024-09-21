
<template>
  <Icon :iconName="'solar-power'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolarPowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solar-power'
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
