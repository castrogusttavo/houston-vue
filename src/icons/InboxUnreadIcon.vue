
<template>
  <Icon :iconName="'inbox-unread'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InboxUnreadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inbox-unread'
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
