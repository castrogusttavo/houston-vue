
<template>
  <Icon :iconName="'energy-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EnergyRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'energy-rectangle'
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
