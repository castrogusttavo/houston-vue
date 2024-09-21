
<template>
  <Icon :iconName="'message-lock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageLock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-lock-02'
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
