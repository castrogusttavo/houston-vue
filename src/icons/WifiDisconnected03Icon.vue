
<template>
  <Icon :iconName="'wifi-disconnected-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiDisconnected03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-disconnected-03'
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
