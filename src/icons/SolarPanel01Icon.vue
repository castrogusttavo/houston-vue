
<template>
  <Icon :iconName="'solar-panel-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolarPanel01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solar-panel-01'
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
