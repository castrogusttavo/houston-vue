
<template>
  <Icon :iconName="'wifi-connected-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiConnected02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-connected-02'
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
