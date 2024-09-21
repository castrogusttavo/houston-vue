
<template>
  <Icon :iconName="'satellite'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SatelliteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'satellite'
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
