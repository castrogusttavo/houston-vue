
<template>
  <Icon :iconName="'hold-locked-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HoldLocked02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hold-locked-02'
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
