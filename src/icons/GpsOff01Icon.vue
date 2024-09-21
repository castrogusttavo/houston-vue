
<template>
  <Icon :iconName="'gps-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GpsOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gps-off-01'
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
