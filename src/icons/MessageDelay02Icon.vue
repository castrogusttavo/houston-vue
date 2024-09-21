
<template>
  <Icon :iconName="'message-delay-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageDelay02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-delay-02'
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
