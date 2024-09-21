
<template>
  <Icon :iconName="'soil-moisture-global'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoilMoistureGlobalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soil-moisture-global'
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
