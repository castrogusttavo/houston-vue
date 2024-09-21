
<template>
  <Icon :iconName="'message-user-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageUser02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-user-02'
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
