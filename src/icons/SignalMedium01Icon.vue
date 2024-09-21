
<template>
  <Icon :iconName="'signal-medium-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignalMedium01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signal-medium-01'
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
