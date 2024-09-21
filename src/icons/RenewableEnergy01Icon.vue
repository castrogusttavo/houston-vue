
<template>
  <Icon :iconName="'renewable-energy-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RenewableEnergy01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'renewable-energy-01'
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
