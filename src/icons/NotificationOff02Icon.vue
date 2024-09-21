
<template>
  <Icon :iconName="'notification-off-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationOff02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-off-02'
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
