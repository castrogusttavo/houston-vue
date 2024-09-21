
<template>
  <Icon :iconName="'notification-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-off-01'
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
