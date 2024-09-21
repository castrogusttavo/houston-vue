
<template>
  <Icon :iconName="'fuel-station'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FuelStationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fuel-station'
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
