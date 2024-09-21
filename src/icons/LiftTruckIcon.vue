
<template>
  <Icon :iconName="'lift-truck'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LiftTruckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lift-truck'
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
