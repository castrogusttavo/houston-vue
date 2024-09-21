
<template>
  <Icon :iconName="'water-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaterEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'water-energy'
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
