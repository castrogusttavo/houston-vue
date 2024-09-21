
<template>
  <Icon :iconName="'notification-snooze-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationSnooze01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-snooze-01'
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
