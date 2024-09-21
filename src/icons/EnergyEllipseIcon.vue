
<template>
  <Icon :iconName="'energy-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EnergyEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'energy-ellipse'
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
