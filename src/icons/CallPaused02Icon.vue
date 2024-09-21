
<template>
  <Icon :iconName="'call-paused-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallPaused02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-paused-02'
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
