
<template>
  <Icon :iconName="'call-locked-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallLocked02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-locked-02'
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
