
<template>
  <Icon :iconName="'notification-off-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationOff03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-off-03'
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
