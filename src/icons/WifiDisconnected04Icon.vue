
<template>
  <Icon :iconName="'wifi-disconnected-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiDisconnected04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-disconnected-04'
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
