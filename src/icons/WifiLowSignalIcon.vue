
<template>
  <Icon :iconName="'wifi-low-signal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiLowSignalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-low-signal'
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
