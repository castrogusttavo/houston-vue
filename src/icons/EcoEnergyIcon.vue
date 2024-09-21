
<template>
  <Icon :iconName="'eco-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EcoEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eco-energy'
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
