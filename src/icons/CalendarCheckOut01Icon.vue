
<template>
  <Icon :iconName="'calendar-check-out-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalendarCheckOut01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calendar-check-out-01'
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
