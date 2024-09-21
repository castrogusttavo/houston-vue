
<template>
  <Icon :iconName="'message-incoming-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageIncoming02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-incoming-02'
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
