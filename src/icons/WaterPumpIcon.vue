
<template>
  <Icon :iconName="'water-pump'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaterPumpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'water-pump'
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
