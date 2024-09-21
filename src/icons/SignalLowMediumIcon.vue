
<template>
  <Icon :iconName="'signal-low-medium'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignalLowMediumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signal-low-medium'
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
