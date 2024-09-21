
<template>
  <Icon :iconName="'pulse-rectangle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PulseRectangle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pulse-rectangle-02'
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
