
<template>
  <Icon :iconName="'notification-bubble'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationBubbleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-bubble'
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
