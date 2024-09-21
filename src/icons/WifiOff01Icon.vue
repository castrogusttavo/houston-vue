
<template>
  <Icon :iconName="'wifi-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-off-01'
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
