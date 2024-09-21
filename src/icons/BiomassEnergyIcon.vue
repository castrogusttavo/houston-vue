
<template>
  <Icon :iconName="'biomass-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BiomassEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'biomass-energy'
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
