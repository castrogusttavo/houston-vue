
<template>
  <Icon :iconName="'apple-reminder'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AppleReminderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple-reminder'
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
