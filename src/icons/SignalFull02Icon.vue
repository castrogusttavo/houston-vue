
<template>
  <Icon :iconName="'signal-full-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignalFull02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signal-full-02'
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
