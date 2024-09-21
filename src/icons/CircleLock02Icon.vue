
<template>
  <Icon :iconName="'circle-lock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleLock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-lock-02'
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
