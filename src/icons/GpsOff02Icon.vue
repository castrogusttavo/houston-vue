
<template>
  <Icon :iconName="'gps-off-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GpsOff02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gps-off-02'
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
