
<template>
  <Icon :iconName="'wifi-no-signal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiNoSignalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-no-signal'
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
