
<template>
  <Icon :iconName="'calendar-check-in-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarCheckIn01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-check-in-01'
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
