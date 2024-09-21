
<template>
  <Icon :iconName="'solar-system'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SolarSystemIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'solar-system'
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
