
<template>
  <Icon :iconName="'wifi-full-signal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiFullSignalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-full-signal'
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
