
<template>
  <Icon :iconName="'message-notification-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageNotification01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-notification-01'
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
