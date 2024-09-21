
<template>
  <Icon :iconName="'circle-lock-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleLockAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-lock-add-02'
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
