
<template>
  <Icon :iconName="'energy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EnergyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'energy'
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
