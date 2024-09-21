
<template>
  <Icon :iconName="'wifi-medium-signal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiMediumSignalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-medium-signal'
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
