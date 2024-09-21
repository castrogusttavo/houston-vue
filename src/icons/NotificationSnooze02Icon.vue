
<template>
  <Icon :iconName="'notification-snooze-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationSnooze02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-snooze-02'
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
