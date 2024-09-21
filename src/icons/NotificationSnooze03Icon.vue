
<template>
  <Icon :iconName="'notification-snooze-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationSnooze03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-snooze-03'
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
