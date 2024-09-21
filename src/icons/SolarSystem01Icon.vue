
<template>
  <Icon :iconName="'solar-system-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolarSystem01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solar-system-01'
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
