
<template>
  <Icon :iconName="'soil-temperature-field'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoilTemperatureFieldIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soil-temperature-field'
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
