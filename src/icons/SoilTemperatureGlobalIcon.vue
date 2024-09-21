
<template>
  <Icon :iconName="'soil-temperature-global'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoilTemperatureGlobalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soil-temperature-global'
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
