
<template>
  <Icon :iconName="'message-done-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageDone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-done-02'
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
