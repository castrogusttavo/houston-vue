
<template>
  <Icon :iconName="'notification-block-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotificationBlock03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notification-block-03'
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
