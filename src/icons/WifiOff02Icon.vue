
<template>
  <Icon :iconName="'wifi-off-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiOff02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-off-02'
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
