
<template>
  <Icon :iconName="'check-unread-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckUnread02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'check-unread-02'
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
