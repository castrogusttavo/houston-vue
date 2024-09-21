
<template>
  <Icon :iconName="'tow-truck'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TowTruckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tow-truck'
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
