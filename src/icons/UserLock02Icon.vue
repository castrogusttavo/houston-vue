
<template>
  <Icon :iconName="'user-lock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserLock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-lock-02'
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
