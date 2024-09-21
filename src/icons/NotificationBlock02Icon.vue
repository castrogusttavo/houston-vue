
<template>
  <Icon :iconName="'notification-block-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationBlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-block-02'
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
