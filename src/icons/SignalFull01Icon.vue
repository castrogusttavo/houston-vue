
<template>
  <Icon :iconName="'signal-full-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignalFull01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signal-full-01'
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
