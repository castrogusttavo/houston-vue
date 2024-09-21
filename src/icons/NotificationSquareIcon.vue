
<template>
  <Icon :iconName="'notification-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-square'
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
