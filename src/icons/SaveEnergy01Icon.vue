
<template>
  <Icon :iconName="'save-energy-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaveEnergy01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'save-energy-01'
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
