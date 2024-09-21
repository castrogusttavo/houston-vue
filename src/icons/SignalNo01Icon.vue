
<template>
  <Icon :iconName="'signal-no-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignalNo01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signal-no-01'
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
