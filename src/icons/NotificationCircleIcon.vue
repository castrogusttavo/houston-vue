
<template>
  <Icon :iconName="'notification-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-circle'
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
