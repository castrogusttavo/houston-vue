
<template>
  <Icon :iconName="'solar-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolarEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solar-energy'
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
