
<template>
  <Icon :iconName="'solar-panel-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolarPanel05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solar-panel-05'
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
