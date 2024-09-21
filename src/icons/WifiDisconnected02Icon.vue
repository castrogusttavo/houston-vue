
<template>
  <Icon :iconName="'wifi-disconnected-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiDisconnected02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-disconnected-02'
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
