
<template>
  <Icon :iconName="'check-unread-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckUnread04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'check-unread-04'
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
