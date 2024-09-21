
<template>
  <Icon :iconName="'pulse-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pulse02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pulse-02'
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
