
<template>
  <Icon :iconName="'wifi-disconnected-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiDisconnected01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-disconnected-01'
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
