
<template>
  <Icon :iconName="'sustainable-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SustainableEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sustainable-energy'
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
