
<template>
  <Icon :iconName="'notification-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Notification01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-01'
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
