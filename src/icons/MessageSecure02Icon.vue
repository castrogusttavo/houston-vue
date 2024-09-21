
<template>
  <Icon :iconName="'message-secure-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageSecure02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-secure-02'
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
