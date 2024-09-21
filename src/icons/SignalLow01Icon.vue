
<template>
  <Icon :iconName="'signal-low-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignalLow01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signal-low-01'
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
