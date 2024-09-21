
<template>
  <Icon :iconName="'reminder'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReminderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'reminder'
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
