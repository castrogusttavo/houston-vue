
<template>
  <Icon :iconName="'message-outgoing-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageOutgoing02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-outgoing-02'
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
