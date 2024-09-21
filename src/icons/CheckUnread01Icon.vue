
<template>
  <Icon :iconName="'check-unread-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckUnread01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'check-unread-01'
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
