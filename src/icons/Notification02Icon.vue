
<template>
  <Icon :iconName="'notification-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Notification02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-02'
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
