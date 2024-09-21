
<template>
  <Icon :iconName="'gps-disconnected'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GpsDisconnectedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gps-disconnected'
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
