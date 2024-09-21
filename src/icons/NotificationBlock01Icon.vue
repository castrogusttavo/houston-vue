
<template>
  <Icon :iconName="'notification-block-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationBlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-block-01'
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
