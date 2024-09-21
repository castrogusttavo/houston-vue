
<template>
  <Icon :iconName="'camera-night-mode-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CameraNightMode01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-night-mode-01'
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
