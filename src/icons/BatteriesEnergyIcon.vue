
<template>
  <Icon :iconName="'batteries-energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteriesEnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'batteries-energy'
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
