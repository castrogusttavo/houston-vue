
<template>
  <Icon :iconName="'wifi-error-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiError01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-error-01'
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
