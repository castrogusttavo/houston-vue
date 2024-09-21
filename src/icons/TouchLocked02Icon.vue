
<template>
  <Icon :iconName="'touch-locked-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TouchLocked02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-locked-02'
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
