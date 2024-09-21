
<template>
  <Icon :iconName="'pulse-rectangle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PulseRectangle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pulse-rectangle-01'
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
