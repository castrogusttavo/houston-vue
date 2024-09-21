
<template>
  <Icon :iconName="'wind-turbine'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WindTurbineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wind-turbine'
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
