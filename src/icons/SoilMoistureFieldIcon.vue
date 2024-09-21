
<template>
  <Icon :iconName="'soil-moisture-field'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoilMoistureFieldIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soil-moisture-field'
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
