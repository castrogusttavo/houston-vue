
<template>
  <Icon :iconName="'check-unread-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckUnread03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'check-unread-03'
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
