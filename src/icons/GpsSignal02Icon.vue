
<template>
  <Icon :iconName="'gps-signal-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GpsSignal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gps-signal-02'
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
