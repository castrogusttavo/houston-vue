
<template>
  <Icon :iconName="'two-finger-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwoFinger02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'two-finger-02'
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
