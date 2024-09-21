
<template>
  <Icon :iconName="'calendar-lock-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarLock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-lock-01'
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
